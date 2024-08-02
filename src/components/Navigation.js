import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='border w-[40%] rounded-lg border-cyan-300 border-2px flex justify-around align-middle items-center  mt-16'>
        <NavLink to="/" 
            className= {
                ({isActive}) => {
                    return ` text-base text-center font-nunito m-2.5
                    ${isActive ? 'bg-cyan-300 text-gray-700' : ' text-gray-400 bg-gray-700 hover:text-cyan-300 active:bg-cyan-300 active:text-gray-700'}
                      border-0 cursor-pointer w-full h-auto rounded capitalize font-semibold    `
                }
            }
            >Crypto</NavLink>
        <NavLink to="/trending" 
         className= {
            ({isActive}) => {
                return ` text-base text-center font-nunito m-2.5
                ${isActive ? 'bg-cyan-300 text-gray-700' : ' text-gray-400 bg-gray-700 hover:text-cyan-300 active:bg-cyan-300 active:text-gray-700'}
                  border-0 cursor-pointer w-full h-auto rounded capitalize font-semibold    `
            }
        }>Trending</NavLink>

        <NavLink to="/saved" 
             className= {
                ({isActive}) => {
                    return ` text-base text-center font-nunito m-2.5
                    ${isActive ? 'bg-cyan-300 text-gray-700' : ' text-gray-400 bg-gray-700 hover:text-cyan-300 active:bg-cyan-300 active:text-gray-700'}
                      border-0 cursor-pointer w-full h-auto rounded capitalize font-semibold    `
                }
            }
        >Saved</NavLink>
      
    </div>
  )
}

export default Navigation
