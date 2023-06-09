import axios from 'axios'
import { Button, FileInput, Label } from 'flowbite-react'
import { useState } from 'react'
import { XMark } from './svgs'

const EditResume = () => {
  const [errMsg, setErrMsg] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [successMsg, setSuccessMsg] = useState<string>('')

  function uploadResume(file : File) {
    setLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/u/resume`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Content_Length: file.size, Content_Type: file.type }),
    }).then((res) => {
      if (res.status === 500) {
        setErrMsg('Server error')
        return
      } else if (res.status === 400) {
        setErrMsg('Check inputs')
        return
      }
      return res.json()
    })
      .then((data) => {
        console.log('post resume', data)
        let formData = new FormData();
        Object.entries(data.fields).forEach(([key, val]) => {
          //@ts-ignore
          formData.append(key, val);
          console.log(key, val)
        });

        const url = data.url;
        formData.append("file", file); // the file object to upload

        setLoading(true)
        axios({
          method: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          url: url,
          data: formData,
        })
          .then(function (response) {
            console.log(response, 'uploaded');
            console.log(response.data, 'uploaded');
            const data = response.data;
            setSuccessMsg("Successfully Uploaded!")
          })
          .catch(function (error) {
            setErrMsg('Some error occured')
            console.log(
              'error uploading image',
              error.response.data,
            );
          }).finally(()=>{
            setLoading(false)
          })
      })
  }
  return (
    <div className=''>
      <h1 className='w-full text-center text-xl'> Upload Resume </h1>
      {
        errMsg.length > 0 &&
        <div className='flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>
          <span>
            {errMsg}
          </span>
          <button onClick={(event) => { event.preventDefault(); setErrMsg('') }}>
            <XMark />
          </button>
        </div>
      }
      {
        successMsg.length > 0 &&
        <div className='flex p-4 justify-between mb-4 text-sm text-green-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400'>
          <span>
            {successMsg}
          </span>
          <button onClick={(event) => { event.preventDefault(); setSuccessMsg('') }}>
            <XMark />
          </button>
        </div>
      }

      <div id="fileUpload" className='my-10'>
        <div className="mb-2 block">
          <Label
            htmlFor="file"
            value="Upload file"
          />
        </div>
        <FileInput
          id="file"
          maxLength={1024 * 1024}
          minLength={1024}
          accept="application/pdf"
          helperText="maxsize 1 MB, allowed format .pdf"
          onChange={(event) => {
            if (event.target.files) {
              if (event.target.files[0].size > 1024 * 1024) {
                setErrMsg("Maximum size 1MB ")
                return
              }
              setFile(event.target.files[0])
            }
          }}
        />
      </div>
      <Button disabled={loading} onClick={(event) => {
        event.preventDefault();
        if (!file) {
          setErrMsg("Select file")
          return
        }
        uploadResume(file)
      }}>
        Upload Resume
      </Button>
    </div >
  )
}

export default EditResume