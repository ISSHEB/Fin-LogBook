import React, {useState, useEffect} from 'react'

export default function TodoMenu({TodoMenuData, setTodoMenuData, TodoMenuOpen})
{
    var [ActionData, setActionData] = useState({})

    useEffect(() => {
        if(TodoMenuData.type == "control payment") {
            setActionData({
                'TodoMenu_name': TodoMenuData.data.roomNumber,
            });
        };
    }, [TodoMenuData]);

    return(
        <>
            <div className="TodoMenu" style={{right: `${TodoMenuOpen ? '0' : "-100%"}`}}>
                <div className="TodoMenu_row">
                    <div className="TodoMenu_list">
                        <div className="TodoMenu_list_line">
                            <a>Комната:</a>
                            <span>{ActionData['TodoMenu_name'] ? ActionData['TodoMenu_name'] : ''}</span>
                        </div>
                    </div>
                    <div className="TodoMenu_name">
                        <span>{ActionData['TodoMenu_name'] ? ActionData['TodoMenu_name'] : ''}</span>
                    </div>
                </div>
            </div>
        </>
    )
};
