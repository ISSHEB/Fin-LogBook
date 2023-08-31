import React,{useState} from 'react'
import { Trash2, Pencil, PlusCircle } from 'lucide-react';

const OtherTodo = ({TodoMenuData, setTodoMenuData, setTodoMenuOpen, TodoMenuOpen }) => {
    const [todoOther, setTodoOther] = useState([
        {
            roomNumber: "504",
            text: "forgot t-shirt",
        },
        {
            roomNumber: "Max",
            comment: "Upgrade",
        },
    ])

    async function openTodoMenu(number) {
        setTodoMenuData({
            type: "todoOther",
            comment: todoOther[number],
        });
        setTodoMenuOpen(true);
    };

  return (
      <div className='blockControl'>
          <div className='blockControlHeader'>
              <h1 className='m-10'>
                  Прочие
              </h1>
              <PlusCircle className='blockControlHeader_icon' />
          </div>
          <div className='bodyInfoRow'>
          {todoOther.map((item, i) => (
              <div className='box' key={item.roomNumber} onClick={() => openTodoMenu(i)}>
                  <div className='boxHeader'>
                      <h6>Комнатa: <b className='boxHeaderText'>{item.roomNumber}</b></h6>
                      {/* <p>До: <b>{item.data}</b></p> */}
                  </div>
                  <div className='boxBody'>
                      {item.text}
                  </div>
                  <div className='boxEnd'>
                      <p className='TodoMenu_row_text'>августь 31/08 20:25</p>
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

export default OtherTodo
