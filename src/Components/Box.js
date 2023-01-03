import React from 'react'

function Box(props) {
  return (
    <div className='w-30 m-10 flex shrink-0 grow-0 flex-col items-center p-4 h-30'>
        <i style={{fontSize:50}} class={props.icon}></i>
        <div className='font-semibold'>{props.text}</div>
    </div>
  )
}

export default Box