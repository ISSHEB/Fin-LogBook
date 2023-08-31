import React, { useState, useEffect } from 'react'
import { ChevronLast } from 'lucide-react';

export default function TodoMenu({ TodoMenuData, setTodoMenuData, TodoMenuOpen, SetTodoMenuOpen }) {
    var [ActionData, setActionData] = useState({})

    useEffect(() => {
        if (TodoMenuData.type == "control payment") {
            setActionData({
                'TodoMenu_name': TodoMenuData.data.roomNumber,
                'TodoMenu_coment': TodoMenuData.data.comment,
                'TodoMenu_data': TodoMenuData.data.date,
            });
        };
    }, [TodoMenuData]);

    useEffect(() => {
        if (TodoMenuData.type == "minibar") {
            setActionData({
                'TodoMenu_name': TodoMenuData.data.roomNumber,
                'TodoMenu_coment': TodoMenuData.data.comment,
                'TodoMenu_data': TodoMenuData.data.date,
            });
        };
    }, [TodoMenuData]);

    useEffect(() => {
        if (TodoMenuData.type == "c") {
            setActionData({
                'TodoMenu_name': TodoMenuData.data.roomNumber,
                'TodoMenu_coment': TodoMenuData.data.comment,
                'TodoMenu_data': TodoMenuData.data.date,
            });
        };
    }, [TodoMenuData]);

    return (
        <>
            
            <div className="TodoMenu" style={{ right: `${TodoMenuOpen ? '0' : "-100%"}` }}>
                <div className="TodoMenu_row">
                    
                    <div className="TodoMenu_list">
                        <div className="TodoMenu_list_line">
                            <ChevronLast className='arrowRight' onClick={() => SetTodoMenuOpen(false)} />
                            <h1 className='headerTextMenu'>Комната:</h1>
                            <b className='textMenu'> {ActionData['TodoMenu_name'] ? ActionData['TodoMenu_name'] : ''}</b>

                        </div>
                        <div className='TodoMenu_row_text_secondBlock'>
                            <p className='TodoMenu_row_text'>Время создание</p>
                            <p className='TodoMenu_row_text'> августь 31/08 20:25</p>
                        </div>
                        <div className='TodoMenu_row_text_secondBlock'>
                            <p className='TodoMenu_row_text'>Тип</p>
                            <p className='TodoMenu_row_text'> Контроль оплаты</p>

                        </div>
                    </div>
                    <div className="TodoMenu_name">
                        <div className="divInput">
                            <input placeholder='+ Номер комнаты' />
                        </div>
                        {
                            TodoMenuData.type == "control payment" ?
                                <div className="divInput">
                                    <input placeholder='+ Оплата до' />
                                </div>
                                : <></>
                        }

                        <div className="divInput">
                            <input placeholder='+ Коментарии' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};
