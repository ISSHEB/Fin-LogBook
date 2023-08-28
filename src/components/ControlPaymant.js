import React from 'react'
import ControlTodo from './Todo/ControlTodo'
import MiniBarTodo from './Todo/MiniBarTodo'
import OtherTodo from './Todo/OtherTodo'

export const ControlPaymant = () => {
  
  return (
    <>
    <div>
      <div className='bodyControl'>
        <ControlTodo/>
        <MiniBarTodo/>
        <OtherTodo/>
      </div>
      
    </div>
      <div className='endControl'>

      </div>
    </>
  )
}
