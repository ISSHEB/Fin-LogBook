import React, { useState } from 'react'
import { Trash2, Pencil, PlusCircle } from 'lucide-react';

export const NoShow = ({ NoShowMenuData, setNoShowMenuData, setNoShowMenuOpen, NoShowMenuOpen }) => {
    const [todoNoShow, setTodoNoshow,] = useState([
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
    async function openNoShowMenu(number) {
        setNoShowMenuData({
            type: "No show",
            data: todoNoShow[number],
        });
        setNoShowMenuOpen(true);
    };
    return (
        <>
            <div><div className='blockInfo'>
                <div className='blockInfoHeader'>
                    <h1>
                       No Show
                    </h1>
                    <PlusCircle className='blockControlHeader_icon' />
                </div>
                <div className='bodyInfoRow'>
                    {todoNoShow.map((item, i) => (
                        <div className='boxInfo' onClick={() => openNoShowMenu(i)}>
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
            </div>
        </>
    )
}
