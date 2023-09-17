import React, { useState } from 'react'
import { Trash2, PlusCircle } from 'lucide-react';
import { DateFormatted } from '../../helpers/helper';

const ControlTodo = ({ TodoMenuData, setTodoMenuData, setTodoMenuOpen, TodoMenuOpen }) => {
    
    const [todoLists, setTodoList]    = useState([
        {
            roomNumber: "618",
            date: new Date().getTime().toString(),
            comment: "что-то случилось",
            paidTo: "28/09"
        },
        {
            roomNumber: "545",
            date: new Date().getTime().toString(),
            comment: "что-то случилось",
            paidTo: "28/09"
        },
    ]);

    async function openTodoMenu(number) {
        setTodoMenuData({
            type: "control payment",
            data: todoLists[number],
        });
        setTodoMenuOpen(true);
    };
    const deleteTodo = (roomNumber) => {
        const updatedList = todoLists.filter((item) => item.roomNumber !== roomNumber);
        setTodoList(updatedList);
    };

    return (
        <div className='blockControl'>
            <div className='blockControlHeader'>
                <h1>
                    Контроль оплаты
                </h1>
                <PlusCircle className='blockControlHeader_icon' onClick={() => setTodoList([...todoLists, {
                    roomNumber: "",
                    date: new Date().getTime().toString(),
                    comment: "",
                    paidTo:"29/09"
                }])} />
            </div>
            <div className='bodyInfoRow'>
                {todoLists.map((item, i) => (
                    <div className='box' key={i} onClick={() => openTodoMenu(i)} >
                        <div className='boxHeader'>
                            <h6>Комнатa: <b className='boxHeaderText' >{item.roomNumber}</b></h6>
                            <p>До: <b>{item.paidTo}</b></p>
                        </div>
                        <div className='boxBody'>
                            {item.comment}
                        </div>
                        <div className='boxEnd'>
                            <p className='TodoMenu_row_text'>{DateFormatted(item.date)}</p>
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

export default ControlTodo
