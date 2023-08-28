import React, { useState } from 'react'
import { Trash2, Pencil, CircleDollarSign } from 'lucide-react';
import { DateFormatted } from '../../helpers/helper';

const ControlTodo = ({TodoMenuData, setTodoMenuData, setTodoMenuOpen, TodoMenuOpen}) => {
    const [todoLists, setTodoList] = useState([
        {
            roomNumber: "618",
            date: new Date().getTime().toString(),
            comment: "что-то случилось",
            paymantTo: ''
        },
        {
            roomNumber: "545",
            date: new Date().getTime().toString(),
            comment: "что-то случилось",
        },
    ]);

    async function openTodoMenu(number)
    {
        setTodoMenuData({
            type: "control payment",
            data: todoLists[number],
        });
        setTodoMenuOpen(true);
    };

    return (

        <div className='blockControl'>
            <div className='blockControlHeader'>
                <h1>
                    Контроль оплаты
                </h1>

            </div>
            {todoLists.map((item, i) => (
                <div className='box' key={i} onClick={() => openTodoMenu(i)}>
                    <div className='boxHeader'>
                        <h6>Комнатa: <b className='boxHeaderText'>{item.roomNumber}</b></h6>
                        <p>До: <b>{DateFormatted(item.date)}</b></p>
                    </div>
                    <div className='boxBody'>
                        {item.comment}
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

export default ControlTodo
