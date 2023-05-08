import { Button, Modal, Spinner } from 'flowbite-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useContext, useRef, useState } from 'react'

import { XMark } from '../components/svgs'
import EditInfo from '../components/EditInfo'
import AppContext from '../context/authContext'
import EditResume from '../components/EditResume'

const Profile = () => {
  const navigate = useNavigate()
  const downloadFileRef = useRef(null)
  const [errMsg, setErrMsg] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const { authState, setAuthState } = useContext(AppContext)
  const [isResume, setIsResume] = useState<string | undefined | null>(null)

  function downloadResume() {
    setLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/u/resume/${authState?._id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/pdf',
      },
    }).then((res) => {
      console.log('response', res, res.status, res.status === 404, typeof res.status)
      if (res.status == 404) {
        setErrMsg('No resume uploaded!')
        return
      } else if (res.status === 400) {
        setErrMsg('Some error occured with user')
        return
      } else if (res.status === 403) {
        setErrMsg('Can not get resume link more than 20 times')
        return
      } else if (res.status === 500) {
        setErrMsg('Server error occured')
        return
      } else if (res.status > 400){
        setErrMsg('Server error occured')
        return
      }
      return res.json()
    })
      .then((data) => {
        if (data && data.url) {
          //@ts-ignore
          downloadFileRef.current?.click();
          alert('Downloading file!')
        }
      }).catch(err => {
        console.log(err)
        setErrMsg('Some error occured')
      }).finally(()=>{
        setLoading(false)
      })

  }
  if (!authState) {
    return (
      <div className=' w-full'>
        <div className='text-xl text-center font-bold my-10'>Please login first!</div>
        <div className='mx-auto w-fit'>
          <Button onClick={(event) => { event.preventDefault(); navigate('/auth') }}>
            Login / Register
          </Button>
        </div>
      </div>
    )
  }
  return (
    <div className='mx-auto max-w-3xl pt-10 px-4 flex flex-col space-y-5'>
      {
        errMsg.length !== 0 &&
        <div className='flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>
          <span>
            {errMsg}
          </span>
          <button onClick={(event) => { event.preventDefault(); setErrMsg('') }}>
            <XMark />
          </button>
        </div>
      }
      <div className='flex space-x-5 w-full'>
        <div className='text-xl font-bold min-w-fit'>Name  &nbsp;:</div>
        <div className='text-xl w-full max-w-full  border-b'>{authState.name}</div>
      </div>

      <div className='flex space-x-5 w-full'>
        <div className='text-xl font-bold min-w-fit pt-3'>{'About :'}</div>
        <div className='w-full max-w-full border border-gray-200 p-3 rounded-xl'>{authState.about}</div>
      </div>
      
      <div className='flex space-x-5 w-full'>
        <div className='text-xl font-bold min-w-fit pt-3'>Skills  &nbsp;&nbsp;:</div>
        <div className='w-full max-w-full border border-gray-200 p-3 rounded-xl min-h-[50px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
            {
              authState.skills.map((skill: string, index) => {
                return <span key={index}
                  className={`rounded-xl  w-full min-w-fit px-2.5 py-1.5 border`}
                >{skill}</span>
              })
            }
          </div>
        </div>
      </div>

      {/* Resume */}
      <div className='flex space-x-5 w-full'>
        <div className='text-xl font-bold min-w-fit pt-3'>Resume  :</div>
        <div className='flex overflow-hidden items-center border rounded-xl'>
          <button disabled={loading} className='flex items-center p-2 space-x-2' onClick={(event) => {
            event.preventDefault()
            downloadResume()
          }}>
            {
              loading &&
              <Spinner />
            }
            <div className='p-3'>Download Resume</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Button to on Edit info and Upload resume Modal */}
      <div className='flex w-full place-content-center space-x-2'>
        <Button onClick={(event) => {
          event.preventDefault();
          setSearchParams({ edit: 'info' })
        }}>
          Edit Info
        </Button>
        <Button onClick={(event) => {
          event.preventDefault();
          setSearchParams({ edit: 'resume' })
        }}>
          Upload Resume
        </Button>
      </div>


      {/* Edit Info */}
      {
        searchParams.get('edit') === 'info' &&
        <EditInfo />
      }

      {/* Upload Resume */}
      <Modal
        show={searchParams.get('edit') === 'resume'}
        size="md"
        popup={true}
        onClose={() => {
          setSearchParams({})
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <EditResume />
        </Modal.Body>
      </Modal>

      <a
        href={(typeof isResume === 'string') ? isResume : ''}
        download={'resume.pdf'}
        className="hidden"
        ref={downloadFileRef}
      />
    </div>
  )
}
// col-span-${Math.floor(skill.length/2)}
export default Profile