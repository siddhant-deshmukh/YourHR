import { XMark } from './svgs';
import { useContext, useState } from 'react'
import AppContext from '../context/authContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Checkbox, Label, Spinner, TextInput } from 'flowbite-react'

const Register = () => {
  const navigate = useNavigate()
  const { setAuthState } = useContext(AppContext)
  const [errMsg, setErrMsg] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams();

  function onSubmitRegister(email: string, password: string, name: string) {
    setLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/register`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name }),
    }).then((res) => {
      if (res.status === 500) {
        setErrMsg('Server error')
        return
      } else if (res.status === 409) {
        setErrMsg('Email already exist. Please Login')
        return
      }
      return res.json()
    })
      .then((data) => {
        if (data && data.user && data.user._id) {
          setAuthState(data.user)
          navigate('/')
        }
      }).catch((err) => {
        setErrMsg('Some error occured')
        console.error(err)
      }).finally(()=>{
        setLoading(false)
      })
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        //@ts-ignore
        let email = event.currentTarget.elements.email?.value
        //@ts-ignore
        let password: string = event.currentTarget.elements.password?.value
        //@ts-ignore
        let repeat: string = event.currentTarget.elements.repeat?.value

        if (!password.match(repeat)) {
          setErrMsg('password and repeat password not equal')
          return
        }
        if (password.length < 5) {
          setErrMsg('password longer than 5')
          return
        }

        //@ts-ignore
        let name = event.currentTarget.elements.name?.value

        onSubmitRegister(email, password, name)

      }}>
      <h1 className='font-bold mx-auto text-xl'>
        Register
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
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          id="email2"
          type="email"
          maxLength={30}
          minLength={3}
          name='email'
          placeholder="name@flowbite.com"
          required={true}
          shadow={true}
        />
      </div>

      {/* Password */}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Your password"
          />
        </div>
        <TextInput
          id="password2"
          type="password"
          name='password'
          maxLength={20}
          minLength={5}
          required={true}
          shadow={true}
        />
      </div>

      {/* Repeat Password */}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="repeat-password"
            value="Repeat password"
          />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          name='repeat'
          maxLength={20}
          minLength={5}
          required={true}
          shadow={true}
        />
      </div>

      {/* Name */}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Your name"
          />
        </div>
        <TextInput
          id="name"
          name='name'
          type="text"
          maxLength={20}
          minLength={3}
          required={true}
          shadow={true}
        />
      </div>

      {/* Submit */}
      <Button type="submit" disabled={loading}>
        <div className='flex space-x-2 items-center'>
          {
            loading &&
            <Spinner />
          }
          <div>
            Register
          </div>
        </div>
      </Button>

      <div className='text-xs mt-5 mx-auto'>
        Don't have an account
        <button
          onClick={(event) => {
            event.preventDefault()
            setSearchParams('login')
          }}
          className='text-blue-600 hover:underline mx-1 dark:text-blue-500'
        > Login </button>
      </div>
    </form>
  )
}

export default Register