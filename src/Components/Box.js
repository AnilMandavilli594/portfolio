import React from 'react'

function Box(props) {
  return (
    <div className='flex flex-col items-center ml-50 mr-50 justify-between'>
      <div className='flex m-10 flex-col justify-center items-center'>
        <i style={{fontSize:100}} class={props.icon}></i>
        <div className='font-semibold'>{props.text}</div>
      </div>
    </div>
  )
}

export default Box