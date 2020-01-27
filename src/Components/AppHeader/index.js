import React from 'react';
import './style.css'

const AppHeader = ({todo,done}) => {
    return (
        <div className="app-header d-flex">
            <h1 className='app-header'>My ToDo List</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;