import React from 'react'
import ActionxLogo from '../images/actionxLogo.png'
import MRLabsLogo from '../images/2MRLabsLogo.png'
function index() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen pb-20 bg-cyan-100 ">
      <div className='flex items-center justify-center bg-white p-1 m-5 border-2 shadow-xl shadow-black w-4/12'>
        <div>
          <div className='font-bold text-lg'>Software Developer Intern (May 2021 to Aug 2021)</div>
          <div className='font-medium'>ActionX Pte Ltd</div>
        </div>
        <img className='p-1' height={100} width={100} src={ActionxLogo} alt="ActionX Logo"/>
      </div>
      <div className='flex items-center bg-white justify-center p-1 m-5 w-4/12 border-2 shadow-xl shadow-black'>
        <img className='p-1' height={100} width={100} src={MRLabsLogo} alt="ActionX Logo"/>
        <div className='pl-5'>
          <div className='font-bold text-lg'>Software Developer(Aug 2021 to Aug 2022 )</div>
          <div className='font-medium'>2MR Labs Pte Ltd</div>
        </div>
      </div>
    </div>
  )
}

export default index