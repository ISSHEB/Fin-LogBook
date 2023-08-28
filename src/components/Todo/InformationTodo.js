import React, { useState } from "react";
import { Trash2, Pencil } from "lucide-react";

const InformationTodo = () => {
  const [todoInfo, setTodoInfo] = useState([
    {
      roomNumber: "618",
      data: "02.07.2023",
      comment: "что-то случилось",
    },
    {
      roomNumber: "545",
      data: "02.07.2023",
      comment: "что-то случилось",
    },
  ]);
  return (
    <div className="blockInfo">
      <div className="blockInfoHeader">
        <h1>Информации</h1>
      </div>
      <div className="bodyInfo">
        <div>
          {todoInfo.map((item) => (
            <div className="boxInfo" key={item.roomNumber}>
              <div className="boxHeader">
                <h6>
                  Комнатa: <b className="boxHeaderText">{item.roomNumber}</b>
                </h6>
              </div>
              <div className="boxBodyInfo">{item.comment}</div>
              <div className="boxEnd">
                <p>25/08</p>
                <div className="boxEndIcon">
                  <Pencil size={20} className="icon" />
                  <Trash2 size={20} className="icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className="form">
            <input className="formInp" placeholder="Номер комнаты"/>
            <textarea className="formInp2" placeholder="Информация"></textarea>
            <button className="infoButton">Добавить</button>
        </aside>
      </div>
    </div>
  );
};

export default InformationTodo;
