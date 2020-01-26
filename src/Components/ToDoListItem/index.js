import React from 'react';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const ToDoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 'bold' : 'normal',
    };

    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style }>
                {label}
            </span>
           <button type="button"
                   className="btn btn-outline-success btn-sm float-right">
               <FontAwesomeIcon icon={faExclamation}/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right" >
      <FontAwesomeIcon icon={faTrash}/>
      </button>
        </span>
    );
};

export default ToDoListItem;