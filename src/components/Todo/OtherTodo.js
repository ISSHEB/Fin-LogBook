import React,{useState} from 'react'
import { Trash2, Pencil, AlertCircle } from 'lucide-react';

const OtherTodo = () => {
    const [todoOther, setTodoOther] = useState([
        {
            title: "504",
            text: "forgot t-shirt",
        },
        {
            title: "Max",
            text: "Upgrade",
        },
    ])
  return (
      <div className='blockControl'>
          <div className='blockControlHeader'>
              <h1 className='m-10'>
                  Прочие
              </h1>
          </div>
          {todoOther.map((item) => (
              <div className='box' key={item.roomNumber}>
                  <div className='boxHeader'>
                      <h6>Комнатa: <b className='boxHeaderText'>{item.title}</b></h6>
                      {/* <p>До: <b>{item.data}</b></p> */}
                  </div>
                  <div className='boxBody'>
                      {item.text}
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

export default OtherTodo
