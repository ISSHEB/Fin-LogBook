import React, { useState } from 'react'
import { Trash2, Pencil, PlusCircle } from 'lucide-react';

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
  const deleteTodo = (roomNumber) => {
    const updatedList = todoMinibar.filter((item) => item.roomNumber !== roomNumber);
    SetTodoMinibar(updatedList);
  };
 
  return (
    <div className='blockControl'>
      <div className='blockControlHeader'>
        <h1 className='m-10'>
          Минибар
        </h1>
        <PlusCircle className='blockControlHeader_icon'  />
      </div>
      <div className='bodyInfoRow'>
      {todoMinibar.map((item, i) => (
        <div className='box' key={item.roomNumber} onClick={() => openTodoMenu(i)}>
          <div className='boxHeader'>
            <h6>Комнатa: <b className='boxHeaderText'>{item.roomNumber}</b></h6>
            <p>К отплате: <b>{item.sum}</b></p>
          </div>
          
          <div className='boxEnd'>
            <p className='TodoMenu_row_text'>августь 31/08 20:25</p>
            <div className='boxEndIcon'>
              
              <Trash2 size={20} className="icon" onClick={() => deleteTodo(item.roomNumber)} />
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}


export default MiniBarTodo
