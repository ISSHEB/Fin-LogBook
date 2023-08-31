import React, { useState, useEffect } from 'react'
import {  ChevronLast } from 'lucide-react';

export default function NoShowMenu({ NoShowMenuData, setNoShowMenuData, NoShowMenuOpen }) {
    {
        var [ActionData, setActionData] = useState({})

        useEffect(() => {
            if (NoShowMenuData.type == "No Show") {
                setActionData({
                    'TodoMenu_name': NoShowMenuData.data.roomNumber,
                    
                });
            };
        }, [NoShowMenuData]);

        return (
            <>
                <div className="TodoMenu" style={{ right: `${NoShowMenuOpen ? '0' : "-100%"}` }}>
                    <div className="TodoMenu_row">
                        <div className="TodoMenu_list">
                            <div className="TodoMenu_list_line">
                                <ChevronLast className='arrowRight' />
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
                                <input placeholder='+ Оплата до' />
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
}
