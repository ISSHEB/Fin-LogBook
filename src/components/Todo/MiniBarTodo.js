import React, { useState } from 'react'
import { Trash2, Pencil, PlusSquare } from 'lucide-react';

const MiniBarTodo = ({ TodoMenuData, setTodoMenuData, setTodoMenuOpen, TodoMenuOpen }) => {


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

  async function openTodoMenu(number) {
    setTodoMenuData({
      type: "minibar",
      data: todoMinibar[number],
    });
    setTodoMenuOpen(true);
  };
 
  return (
    <div className='blockControl'>
      <div className='blockControlHeader'>
        <h1 className='m-10'>
          Минибар
        </h1>
        <PlusSquare className='blockControlHeader_icon' />
      </div>
      <div className='bodyInfoRow'>
      {todoMinibar.map((item, i) => (
        <div className='box' key={item.roomNumber} onClick={() => openTodoMenu(i)}>
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
    </div>
  )
}


export default MiniBarTodo
