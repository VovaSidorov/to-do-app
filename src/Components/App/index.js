import React from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import './style.css'
import ItemStatusFilter from "../ItemStatusFilter";


const App = () => {

    const toDoData = [
        {label:"Drink Coffe", important: false, id:1},
        {label:"Make awesome App", important: true, id:2},
        {label:"Have a lunch", important: false, id:3}
    ];

    return (
        <div className="todo-app ">
            <AppHeader todo={1} done={2}/>
            <SearchPanel />
            <ItemStatusFilter/>
            <ToDoList todos = {toDoData} />
        </div>
    );
};

export default  App;