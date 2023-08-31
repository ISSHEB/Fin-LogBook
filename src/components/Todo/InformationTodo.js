import React, { useEffect, useState } from 'react';
import { Trash2, Pencil, PlusSquare } from "lucide-react";

export default function InformationTodo() {

    const [todoInfo, setTodoInfo]       = useState([]);
    const [test, setTest]               = useState(null);
    const [FormInp, setFormInp]         = useState("");
	const [FormInp2, setFormInp2]       = useState("");
    
    function setNewData()
    {
        var newTodoInfo = [];

        for(var element of todoInfo)
        {
            newTodoInfo.push(element);
        };

        newTodoInfo.push({
			roomNumber: FormInp,
			comment: FormInp2,
		});

        setTodoInfo(newTodoInfo);
    };

    return(
        <div className="blockInfo">
            <div className="blockInfoHeader">
                <h1>Информации</h1>
                {/* <PlusSquare className='blockControlHeader_icon' /> */}
            </div>
            <div className="bodyInfo">
                <div className="bodyInfoRow">
                    {todoInfo.map((item) => (
                        <div className="boxInfo" key={item.roomNumber}>
                            <div className="boxHeader">
                                <h6>
                                    Комнатa: <b className="boxHeaderText">{item.roomNumber}</b>
                                </h6>
                            </div>
                            <div className="boxBodyInfo">{item.comment}</div>
                            <div className="boxEnd">
                                <p className='TodoMenu_row_text'>{(() => new Date(item.date).customFormat("#DD#/#MM#/#YYYY#"))}</p>
                                <div className="boxEndIcon">
                                    <Pencil size={20} className="icon" />
                                    <Trash2 size={20} className="icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
               
                <aside className="form">
                    <input onChange={((e) => setFormInp(e.target.value))} className="formInp" placeholder="Номер комнаты" />
                    <textarea onChange={((e) => setFormInp2(e.target.value))} className="formInp2" placeholder="Информация"></textarea>
                    <button onClick={setNewData} className="infoButton">Добавить</button>
                </aside>
            </div>
        </div>
    );
};
