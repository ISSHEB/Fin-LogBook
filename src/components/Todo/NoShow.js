import React, { useState } from 'react'
import { Trash2, Pencil } from 'lucide-react'; 

export const NoShow = () => {
    const [todoNoShow, setTodoNoshow] = useState([
        {
            id: '1',
            roomNumber: "618",
            firstName: "Grigori",
            date: '02.07.2023',
            reservationNumber: '4945123',
            firstNightCost: '7000',
            totalCost: '14000',
            comment: "что-то случилось",
        },
        {
            id: '2',
            roomNumber: '61ыв',
            firstName: 'ысвс',
            date: '02.07.2023вы',
            reservationNumber: 'ыв4945123',
            firstNightCost: '7000ы',
            totalCost: '14000ыы',
            comment: 'что-то слвучилось',
        },
    ]);
  return (
      <div><div className='blockInfo'>
          <div className='blockInfoHeader'>
              <h1>
                  Контроль оплаты
              </h1>

          </div>
          {todoNoShow.map((item) => (
              <div className='boxInfo' >
                  <div className='bodyNoShow' key={item.id}>
                    <div className='bodyNoShowInfo'>
                        <b>Комната</b>
                        <p>{item.roomNumber}</p>
                    </div>
                    <div className='bodyNoShowInfo'>
                        <b>Комната</b>
                        <p>{item.firstName}</p>
                    </div>
                    <div className='bodyNoShowInfo'>
                        <b>Комната</b>
                        <p>{item.date}</p>
                    </div>
                    <div className='bodyNoShowInfo'>
                        <b>Комната</b>
                        <p>{item.reservationNumber}</p>
                    </div>
                    <div className='bodyNoShowInfo'>
                        <b>Комната</b>
                        <p>{item.firstNightCost}</p>
                    </div>
                    <div className='bodyNoShowInfo'>
                        <b>Комната</b>
                        <p>{item.totalCost}</p>
                    </div>
                    <div className='bodyNoShowInfo'>
                        <b>Комната</b>
                        <p>{item.comment}</p>
                    </div>

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
      </div></div>
  )
}
