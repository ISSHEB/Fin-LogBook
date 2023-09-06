import React, { useState } from 'react'
import { Trash2, Pencil, PlusCircle } from 'lucide-react';
import { DateFormatted } from '../../helpers/helper';

export const PdPm = ({ PmPdMenuData, setPmPdMenuData, setNoPmPdMenuOpen, NoPmPdMenuOpen }) => {

    
    const [pmTodo, SetPmlist] = useState([
        {
            roomNumber: '9500',
            date: new Date().getTime().toString(),
            comment: '1090',

        },
        {
            roomNumber: '9015',
            date: new Date().getTime().toString(),
            comment: '0',

        },
        {
            roomNumber: '9005',
            date: new Date().getTime().toString(),
            comment: '-1940',

        },
        {
            roomNumber: '9001',
            date: new Date().getTime().toString(),
            comment: '2735',

        },

    ])
    const [pdTodo, SetPdlist] = useState([
        {
            roomNumber: '98855',
            date: new Date().getTime().toString(),
            comment: '1090',

        },
        {
            roomNumber: '94985',
            date: new Date().getTime().toString(),
            comment: '0',

        },
        {
            roomNumber: '96265',
            date: new Date().getTime().toString(),
            comment: '-1940',

        },
        {
            roomNumber: '995955',
            date: new Date().getTime().toString(),
            comment: '2735',

        },

    ])

    async function openPmPdMenu(number) {
        setPmPdMenuData({
            type: "PD",
            data: pdTodo[number],
        });
        setNoPmPdMenuOpen(true);
    };

    async function openPmPdMenuu(number) {
        setPmPdMenuData({
            type: "PM",
            data: pmTodo[number],
        });
        setNoPmPdMenuOpen(true);
    };
    
    const deleteTodo = (roomNumber) => {
        const updatedList = pmTodo.filter((item) => item.roomNumber !== roomNumber);
        SetPmlist(updatedList);
    };

  return (
      <div className='flex'>
        <div className='blockControl'>
            <div className='blockControlHeader'>
                <h1>
                    PD
                </h1>
                  <PlusCircle className='blockControlHeader_icon' />
            </div>
            <div className='bodyInfoRow'>
            {pdTodo.map((item, i) => (
                <div className='box' key={i} onClick={() => openPmPdMenu(i)}>
                    <div className='boxHeader'>
                        <h6>Комнатa: <b className='boxHeaderText'>{item.roomNumber}</b></h6>
                        <p>До: <b>{DateFormatted(item.date)}</b></p>
                    </div>
                    <div className='boxBody'>
                        {item.comment}
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

        <div className='blockControl'>
            <div className='blockControlHeader'>
                <h1>
                    PM
                </h1>
                  <PlusCircle className='blockControlHeader_icon' />
            </div>
            
            {pmTodo.map((item, i) => (
                <div className='box' key={i} onClick={() => openPmPdMenuu(i)}>
                    <div className='boxHeader'>
                        <h6>Комнатa: <b className='boxHeaderText'>{item.roomNumber}</b></h6>
                        <p>До: <b>{DateFormatted(item.date)}</b></p>
                    </div>
                    <div className='boxBody'>
                        {item.comment}
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
