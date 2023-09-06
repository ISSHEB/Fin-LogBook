import React, { useState, useEffect } from 'react'
import { ChevronLast } from 'lucide-react';

export default function TodoMenu({ TodoMenuData, TodoMenuOpen, setTodoMenuOpen, handleDataUpdate }) {

    var [ActionData, setActionData] = useState({})
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');

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
        if (TodoMenuData.type == "other") {
            setActionData({
                'TodoMenu_name': TodoMenuData.data.roomNumber,
                'TodoMenu_coment': TodoMenuData.data.comment,
                'TodoMenu_data': TodoMenuData.data.date,
            });
        };
    }, [TodoMenuData]);

    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    const handleInputChange3 = (e) => {
        setInputValue3(e.target.value);
    };

    return (
        <>

            <div className="TodoMenu" style={{ right: `${TodoMenuOpen ? '0' : "-100%"}` }}>
                <div className="TodoMenu_row">

                    <div className="TodoMenu_list">
                        <div className="TodoMenu_list_line">
                            <ChevronLast className='arrowRight' onClick={() => setTodoMenuOpen(false)} />
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
                            <input placeholder=' Номер комнаты' onChange={handleInputChange1} value={inputValue1} />
                        </div>
                        {
                            TodoMenuData.type == "control payment" ?
                                <div className="divInput">
                                    <input placeholder=' Оплата до' onChange={handleInputChange2} value={inputValue2} />
                                </div>
                                : <></>
                        }

                        <div className="divInput">
                            <textarea placeholder=' Коментарии' onChange={handleInputChange3} value={inputValue3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
