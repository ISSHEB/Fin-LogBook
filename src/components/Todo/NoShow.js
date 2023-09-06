import React, { useState } from 'react'
import { Trash2, Pencil, PlusCircle } from 'lucide-react';

export const NoShow = ({ NoShowMenuData, setNoShowMenuData, setNoShowMenuOpen, NoShowMenuOpen }) => {
    const [todoNoShow, setTodoNoshow,] = useState([
        {
            roomNumber: "618",
            firstName: "Grigori",
            date: '02.07.2023',
            reservationNumber: '4945123',
            firstNightCost: '7000',
            totalCost: '14000',
            comment: "что-то случилось",
        },
        {
            roomNumber: '754',
            firstName: 'саша',
            date: '02.07.2023в',
            reservationNumber: '4945123',
            firstNightCost: '65500',
            totalCost: '28500',
            comment: 'что-то слвучилось',
        },
    ]);
    async function openNoShowMenu(number) {
        setNoShowMenuData({
            type: "No show",
            data: todoNoShow[number],
        });
        setNoShowMenuOpen(true);
    };

    const deleteTodo = (roomNumber) => {
        const updatedList = todoNoShow.filter((item) => item.roomNumber !== roomNumber);
        setTodoNoshow(updatedList);
    };

    return (
        <>
            <div><div className='blockInfo'>
                <div className='blockInfoHeader'>
                    <h1>
                       No Show
                    </h1>
                    <PlusCircle className='blockControlHeader_icon' onClick={() => setTodoNoshow([...todoNoShow, {
                        roomNumber: '754',
                        firstName: 'саша',
                        date: '02.07.2023в',
                        reservationNumber: '4945123',
                        firstNightCost: '65500',
                        totalCost: '28500',
                        comment: 'что-то слвучилось',
                    }])} />
                </div>
                <div className='bodyInfoRow'>
                    {todoNoShow.map((item, i) => (
                        <div className='boxInfo' onClick={() => openNoShowMenu(i)}>
                            <div className='bodyNoShow' key={item.roomNumber}>
                                <div className='bodyNoShowInfo'>
                                    <b>Комната</b>
                                    <p>{item.roomNumber}</p>
                                </div>
                                <div className='bodyNoShowInfo'>
                                    <b>Фамилия</b>
                                    <p>{item.firstName}</p>
                                </div>
                                <div className='bodyNoShowInfo'>
                                    <b>Дата</b>
                                    <p>{item.date}</p>
                                </div>
                                <div className='bodyNoShowInfo'>
                                    <b>Бронирование</b>
                                    <p>{item.reservationNumber}</p>
                                </div>
                                <div className='bodyNoShowInfo'>
                                    <b>Первая ночь</b>
                                    <p>{item.firstNightCost}</p>
                                </div>
                                <div className='bodyNoShowInfo'>
                                    <b>Общая стоимось</b>
                                    <p>{item.totalCost}</p>
                                </div>
                                <div className='bodyNoShowInfo'>
                                    <b>Коментарий</b>
                                    <p>{item.comment}</p>
                                </div>

                            </div>

                            <div className='boxEnd'>
                                <p className='TodoMenu_row_text'>августь 31/08 20:25</p>
                                <div className='boxEndIcon'>
                                    <Trash2 size={20} className="icon" onClick={() => deleteTodo(item.roomNumber)}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}
