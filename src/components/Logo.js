import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <Link to='/' className='absolute top-[1.5rem] left-[1.5rem] [text-decoration:none] 
    flex text-xl text-cyan-300 items-center'>
      <img src={logo} alt="CryptoBuckets" />
      <span className=''>CryptoBuckets</span>
    </Link>
  )
}

export default Logo
