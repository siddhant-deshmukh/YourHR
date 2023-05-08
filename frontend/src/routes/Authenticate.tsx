import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Login from '../components/Login'
import Register from '../components/Register';

const Authenticate = () => {
  return (
    <div className='w-full'>
      <div className='max-w-md mx-auto mt-10 border p-5 rounded-3xl shadow-xl'>
        <AuthType />
      </div>
    </div>
  )
}

const AuthType = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  if(searchParams.has('verify-email')){
    return <Login />
  }else if(searchParams.has('register')){
    return <Register />
  }else{
    return <Login />
  }
}

export default Authenticate