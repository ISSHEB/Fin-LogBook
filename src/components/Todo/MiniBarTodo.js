import React, { useState } from 'react'
import { Trash2, Pencil, Martini } from 'lucide-react';

const MiniBarTodo = () => {


  const [todoMinibar, SetTodoMinibar] = useState([
    {
      roomNumber: "555",
      sum: "1000",

    },
    {
      roomNumber: "557",
      sum: "1000",

    },
  ])

 
  return (
    <div className='blockControl'>
      <div className='blockControlHeader'>
        <h1 className='m-10'>
          Минибар
        </h1>
        
      </div>
      {todoMinibar.map((item) => (
        <div className='box' key={item.roomNumber}>
          <div className='boxHeader'>
            <h6>Комнатa: <b className='boxHeaderText'>{item.roomNumber}</b></h6>
            <p>К отплате: <b>{item.sum}</b></p>
          </div>
          
          <div className='boxEnd'>
            <p>25/08</p>
            <div className='boxEndIcon'>
              <Pencil size={20} className="icon" />
              <Trash2 size={20} className="icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


export default MiniBarTodo
