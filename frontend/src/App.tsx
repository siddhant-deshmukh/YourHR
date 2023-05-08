import { useContext, useState, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const NavBar = lazy(() => import("./components/NavBar"));
const Authenticate = lazy(() => import("./routes/Authenticate"));
const Home = lazy(() => import("./routes/Home"));
const Profile = lazy(() => import("./routes/Profile"));

import AppContext from './context/authContext'


function App() {
  const { authLoading } = useContext(AppContext)

  if (authLoading) {
    return (
      <LoadingPage />
    )
  }
  return (
    <div className='w-full overflow-hidden'>
      <Suspense fallback={<LoadingPage/>}>
        <div className='max-w-6xl mx-auto'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Authenticate />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  )
}

export function LoadingPage() {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen items-center flex'>
      <div className='mx-auto w-fit'>
        <img src='logo.svg' className='w-20 h-20 ' />
        <div className='text-xl font-bold'>
          Loading ...
        </div>
      </div>
    </div>
  )
}

export default App
