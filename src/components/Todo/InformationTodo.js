import React, { useEffect, useState } from 'react';
import { Trash2, Pencil } from "lucide-react";

export default function InformationTodo() {
	const [FormInp, setFormInp] = useState("");
	const [FormInp2, setFormInp2] = useState("");
	const [todoInfo, setTodoInfo] = useState([]);

	async function createNewTodo() {
		var newTodoInfo = todoInfo;

		newTodoInfo.push({
			roomNumber: FormInp,
			comment: FormInp2,
			data: new Date().getTime().toString(),
		});

		await setTodoInfo(newTodoInfo);
	};

	useEffect(() => {
		console.log(todoInfo);
	}, [todoInfo])

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
								<p>{(() => new Date(item.date).customFormat("#DD#/#MM#/#YYYY#"))}</p>
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
					<button onClick={(() => createNewTodo())} className="infoButton">Добавить</button>
				</aside>
			</div>
		</div>
	);
};
