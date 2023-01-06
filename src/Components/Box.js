import React from 'react'

function Box(props) {
  return (
    <div className='w-30 min-w-full m-10 flex grow-0 flex-col items-center p-4 h-30'>
        <i style={{fontSize:50}} class={props.icon}></i>
        <div className='font-semibold'>{props.text}</div>
    </div>
  )
}

export default Box