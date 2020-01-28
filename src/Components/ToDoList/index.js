import React from 'react';
import ToDoListItem from "../ToDoListItem";
import './style.css';

const ToDoList = ({todos,onDeleted,onTooggleImportant,onTooggleDone}) => {

    const elements = todos.map((item)=>{
        const {id, ...itemProps} = item;
        return  (
            <li key={id} className="list-group-item">
                <ToDoListItem
                    {...itemProps}
                    onDeleted={()=>onDeleted(id)}
                    onTooggleDone={()=>onTooggleDone(id)}
                    onTooggleImportant={()=>onTooggleImportant(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;