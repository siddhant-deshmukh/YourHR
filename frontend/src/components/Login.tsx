import { useContext, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Checkbox, Label, Spinner, TextInput } from 'flowbite-react'

import { XMark } from './svgs';
import AppContext from '../context/authContext';

const Login = () => {
  const navigate = useNavigate()
  const { setAuthState } = useContext(AppContext)
  const [errMsg, setErrMsg] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams();

  function onSubmitForm(email: string, password: string) {

    // console.log("Login submit")
    setLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {

      if (res.status === 500) {
        setErrMsg('Server error')
        return
      } else if (res.status === 406) {
        setErrMsg('Wrong password')
        return
      } else if (res.status === 404) {
        setErrMsg('Email doesnt exist. Please register')
        return
      }
      return res.json()
    })
      .then((data) => {
        if (data && data.user && data.user._id) {
          console.log(data)
          setAuthState(data.user)
          navigate('/')
        }
      }).catch((err)=>{
        setErrMsg('Some error occured')
        console.error('Error while login',err)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        //@ts-ignore
        let email : string = event.currentTarget.elements.email?.value
        //@ts-ignore
        let password : string = event.currentTarget.elements.password?.value
        
        if(password.length < 5){
          setErrMsg('please make atleast 5 letter password')
          return
        }
        if(email.length < 3){
          setErrMsg('please make atleast 5 letter password')
          return
        }
        onSubmitForm(email,password)
      }}

    >
      <h1 className='font-bold mx-auto text-xl'>
        Login
      </h1>
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

      {/* Email */}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          name='email'
          minLength={3}
          maxLength={20}
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>

      {/* Password */}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          minLength={5}
          maxLength={20}
          type="password"
          name='password'
          required={true}
        />
      </div>
      
      {/* Submit Button */}
      <Button type="submit" disabled={loading}>
        <div className='flex space-x-2 items-center'>
          {
            loading &&
            <Spinner />
          }
          <div>
            Login
          </div>
        </div>
      </Button>

      <div className='text-xs mt-5 mx-auto'>
        Don't have an account
        <button
          onClick={(event) => {
            event.preventDefault()
            setSearchParams('register')
          }}
          className='text-blue-600 hover:underline mx-1 dark:text-blue-500'
        > Register </button>
      </div>
    </form>
  )
}

export default Login