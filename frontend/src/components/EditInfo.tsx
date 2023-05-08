import { Button } from 'flowbite-react'
import React, { useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AppContext from '../context/authContext'
import { XMark } from './svgs'

const EditInfo = () => {
  const { authState, setAuthState } = useContext(AppContext)
  const [name, setName] = useState<string>(authState?.name || '')
  const [about, setAbout] = useState<string>(authState?.about || '')
  // const tempSkill = ['Problem Solving', 'ReactJS', 'NextJS', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'MongoDB', 'Data Structures']
  const [skills, setSkills] = useState<string[]>(authState?.skills || [])
  const [newSkill, setNewSkill] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [errMsg, setErrMsg] = useState<string>('')

  function closeModal() {
    setSearchParams({})
  }

  if (!authState) {
    return (
      <div>
        Login first
      </div>
    )
  }
  return (
    <div className='fixed top-0 left-0  z-10 items-center  w-screen h-screen px-2 bg-black bg-opacity-25 overflow-y-auto'>
      <div className="relative text-center my-10 w-full max-w-3xl bg-white mx-auto rounded-xl p-3 flex flex-col  space-y-3">
        <h3 className="mt-1 pb-8 text-xl font-bold  dark:text-gray-400">
          Edit User Info
        </h3>
        <button
          className='absolute top-0 right-2  hover:bg-gray-200 rounded-xl p-2'
          onClick={(event) => {
            event.preventDefault();
            closeModal()
          }}
        >
          <XMark />
        </button>

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

        <div className=''>
          <div className=' font-bold mr-auto w-fit'>Name  &nbsp;:</div>
          <input
            className='outline-none border text-md w-full p-3 rounded-lg'
            maxLength={20} minLength={1}
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }} />
        </div>
        <div className=''>
          <div className=' font-bold mr-auto w-fit'>About :</div>
          <textarea
            className='outline-none border min-h-[60px] max-h-[100px] text-md w-full p-3 rounded-lg'
            value={about} maxLength={200}
            onChange={(event) => {
              setAbout(event.target.value)
            }} />
        </div>
        {/* <div className='w-full'>
          <div className=' font-bold min-w-fit pt-3'>{'About :'}</div>
          <div className='w-full max-w-full border border-gray-200 p-3 rounded-xl'>{authState.about} fsdfdfs</div>
        </div> */}


        <div className='w-full'>
          <div className='font-bold pt-3 w-fit mr-auto'>Skills  &nbsp;&nbsp;:</div>
          <div className='w-full max-w-full border border-gray-200 p-3 rounded-xl min-h-[50px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
              {
                skills.map((skill: string, index) => {
                  return <span
                    className={`rounded-xl flex items-center justify-between w-full min-w-fit px-2.5 py-1.5 border`}
                  >{skill}
                    <button
                      className='hover:bg-gray-200 rounded-xl p-2'
                      onClick={(event) => {
                        event.preventDefault();
                        setSkills((prev) => {
                          let new_ = prev.slice(0, index).concat(prev.slice(index + 1))
                          return new_
                        })
                      }}
                    >
                      <XMark />
                    </button>
                  </span>
                })
              }
              <span
                className={`rounded-xl flex items-center justify-between w-full min-w-fit px-2.5 py-1.5 border border-blue-400`}
              >
                <input
                  maxLength={20} minLength={1}
                  placeholder="new skill" className='outline-none '
                  value={newSkill}
                  onChange={(event) => {
                    setNewSkill(event.target.value)
                  }} />
                <button
                  className='hover:bg-gray-200 text-xl rounded-xl p-2'
                  onClick={(event) => {
                    event.preventDefault();
                    if (newSkill.length < 1) return
                    setSkills((prev) => {
                      let new_ = prev.slice().concat([newSkill])
                      setNewSkill('')
                      return new_
                    })
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className='flex space-x-5 place-content-center'>
          <Button
            color={'blue'}
            onClick={(event) => {
              event.preventDefault();
              if (name.length < 1) {
                setErrMsg('Plese enter name')
                return
              }
              fetch(`${import.meta.env.VITE_API_URL}/u/`, {
                method: 'PUT',
                credentials: 'include',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, about, skills }),
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
                  console.log('edit info', data)
                  if (data && data.msg) {
                    setAuthState((prev)=>{
                      if(!prev) return null
                      return {
                        ...prev,
                        name,
                        about,
                        skills
                      }
                    })
                    // navigate('/')
                    closeModal()
                  } else {
                    setErrMsg('Something goes wrong')
                  }
                })
            }}
          >
            Save Changes
          </Button>
          <Button
            color={'red'}
            onClick={(event) => {
              event.preventDefault();
              closeModal()
            }} >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditInfo