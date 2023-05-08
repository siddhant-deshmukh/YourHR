import React, { useContext } from 'react'
import { Link, Router, useLocation, useNavigate } from 'react-router-dom'
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react'
import AppContext from '../context/authContext'

const NavBar = () => {

  const { authState, setAuthState } = useContext(AppContext)
  const navigate = useNavigate()
  const location = useLocation();

  return (
    <div className='w-full'>

      <Navbar
        fluid={true}
        rounded={true}
      >
        <Link to={'/'}>
          <div className='flex'>
            <img
              src="logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              YourHR
            </span>
          </div>
        </Link>

        <div className="flex md:order-2 space-x-3">
          {
            (authState && authState._id) &&
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-1 rounded-full border-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {authState.name}
                </span>
                <span className="block truncate text-sm font-medium">
                  {authState.email}
                </span>
              </Dropdown.Header>

              <Dropdown.Item>
                <Link to='/profile'>Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={(event) => {
                  event.preventDefault();
                  fetch(`${import.meta.env.VITE_API_URL}/logout`, {
                    credentials: 'include',
                    mode: 'cors',
                    method: 'GET'
                  }).then((res) => {
                    if (res.status === 200) {
                      setAuthState(null)
                    }
                  })

                }}>
                  Sign out
                </button>
              </Dropdown.Item>
            </Dropdown>
          }

          {
            !(authState && authState._id) &&
            <Button onClick={(event) => { event.preventDefault(); navigate('/auth') }}>
              Login / Register
            </Button>
          }


          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            active={location.pathname === '/'}
          >
            Home
          </Navbar.Link>
          <Navbar.Link 
            href="/profile"
            active={location.pathname === '/profile'}>
            Profile
          </Navbar.Link>
          <Navbar.Link href="#">
            Premium Services
          </Navbar.Link>
          <Navbar.Link href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar


