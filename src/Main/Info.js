import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Info() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center space-y-10">
        <text className='font-bold text-4xl text-cyan-200'>I am Krishna Anil Mandavilli</text>
        <text className='text-xl font-semibold text-cyan-200'>Current Master's Student</text>
        <text className='text-xl font-semibold text-cyan-200'>FrontEnd Developer</text>
          <Link to="home">
          <div className='p-2 border-2 rounded-xl bg-pink-200'>
            <text>See my portfolio</text>
            <ArrowForwardIcon />
          </div>
          </Link>
    </div>
  )
}

export default Info