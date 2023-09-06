import React, {useState} from 'react'
import ControlTodo from './Todo/ControlTodo'
import MiniBarTodo from './Todo/MiniBarTodo'
import OtherTodo from './Todo/OtherTodo'
import TodoMenu from './menu/TodoMenu';


export const ControlPaymant = () => 
{
    const [TodoMenuData, setTodoMenuData] = useState({});
    const [TodoMenuOpen, setTodoMenuOpen] = useState(false);

    return (
        <>
            <TodoMenu 
                TodoMenuData={TodoMenuData}
                setTodoMenuData={setTodoMenuData}
                TodoMenuOpen={TodoMenuOpen}
                setTodoMenuOpen={setTodoMenuOpen}
                handleDataUpdate={handleDataUpdate}
                setData={setData}
            />
            <div>
                <div className='bodyControl'>
                    <ControlTodo 
                        TodoMenuData={TodoMenuData}
                        setTodoMenuData={setTodoMenuData}
                        setTodoMenuOpen={setTodoMenuOpen}
                        TodoMenuOpen={TodoMenuOpen}
    
                    />
                    <MiniBarTodo 
                        TodoMenuData={TodoMenuData}
                        setTodoMenuData={setTodoMenuData}
                        setTodoMenuOpen={setTodoMenuOpen}
                        TodoMenuOpen={TodoMenuOpen}
                    />
                    <OtherTodo 
                        TodoMenuData={TodoMenuData}
                        setTodoMenuData={setTodoMenuData}
                        setTodoMenuOpen={setTodoMenuOpen}
                        TodoMenuOpen={TodoMenuOpen}

                    />
                </div>

            </div>
            
        </>
    )
}  
