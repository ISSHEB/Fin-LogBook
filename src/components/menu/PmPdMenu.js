import React, { useState, useEffect } from 'react'
import { ChevronLast } from 'lucide-react';

export default function ({ PmPdMenuData, setPmPdMenuData, NoPmPdMenuOpen, setNoPmPdMenuOpen }) {
    var [ActionData, setActionData] = useState({})

    useEffect(() => {
        if (PmPdMenuData.type == "PD") {
            setActionData({
                'TodoMenu_name': PmPdMenuData.data.roomNumber,
                'TodoMenu_coment': PmPdMenuData.data.comment,
                'TodoMenu_data': PmPdMenuData.data.date,
            });
        };
    }, [PmPdMenuData]);

    useEffect(() => {
        if (PmPdMenuData.type == "PM") {
            setActionData({
                'TodoMenu_name': PmPdMenuData.data.roomNumber,
                'TodoMenu_coment': PmPdMenuData.data.comment,
                'TodoMenu_data': PmPdMenuData.data.date,
            });
        };
    }, [PmPdMenuData]);



    return (
        <>

            <div className="TodoMenu" style={{ right: `${NoPmPdMenuOpen ? '0' : "-100%"}` }}>
                <div className="TodoMenu_row">

                    <div className="TodoMenu_list">
                        <div className="TodoMenu_list_line">
                            <ChevronLast className='arrowRight' onClick={() => setNoPmPdMenuOpen(false)} />
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
                        <div className="divInput">
                            <input placeholder='+ Коментарии' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};
