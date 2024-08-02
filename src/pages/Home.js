import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CryptoProvider } from '../context/CryptoContext'

const Home = () => {
  return (
    <CryptoProvider>
          <main className='w-full h-full flex items-center flex-col justify-center 
      first-letter:place-content-center relative text-white font-nunito  bg-gray-800' >

          <div className='w-screen h-screen bg-gray-800 fixed -z-10' />
          <Logo />
          <Navigation />
          <Outlet />
        
          </main>
    </CryptoProvider>
    
  )
}

export default Home
