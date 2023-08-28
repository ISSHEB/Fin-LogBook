import React, { useState } from 'react'
import { Trash2, Pencil, CircleDollarSign } from 'lucide-react';
const ControlTodo = () => {
    const [todoLists, setTodoList] = useState([
        {
            roomNumber: "618",
            data: '02.07.2023',
            comment: "что-то случилось",
        },
        {
            roomNumber: "545",
            data: '02.07.2023',
            comment: "что-то случилось",
        },
    ]);

    return (
        <div className='scroll'>
            <div className='blockControl'>
                <div className='blockControlHeader'>
                    <h1>
                        Контроль оплаты
                    </h1>
                    
                </div>
                {todoLists.map((item) => (
                    <div className='box' key={item.roomNumber}>
                        <div className='boxHeader'>
                            <h6>Комнатa: <b className='boxHeaderText'>{item.roomNumber}</b></h6>
                            <p>До: <b>{item.data}</b></p>
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
        </div>
    )
}

export default ControlTodo
