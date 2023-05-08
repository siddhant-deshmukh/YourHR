import { Button } from 'flowbite-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import AppContext from '../context/authContext'

const Home = () => {
  const { authState } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='w-full'>
      <h1 className='text-2xl my-10 text-center font-bold'> Welcome to YourHR website </h1>
      {
        authState === null &&
        <div className='mx-auto w-fit'>
          <Button onClick={(event) => { event.preventDefault(); navigate('/auth') }}>
            Login / Register
          </Button>
        </div>
      }
      {
        authState !== null &&
        <div className='mx-auto w-fit'>
        <h1 className='text-xl my-10 text-center font-bold'> Hello {authState.name} </h1>
          <Button onClick={(event) => { event.preventDefault(); navigate('/profile') }}>
            Visit Profile
          </Button>
        </div>
      }
    </div>
  )
}

export default Home