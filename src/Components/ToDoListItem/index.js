import React, {Component} from 'react';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'


export default class ToDoListItem extends Component{
    render() {
    const {label, onDeleted, onTooggleImportant, onTooggleDone,important,done}=this.props;


    let classNames = 'todo-list-item';

    if (done){
        classNames += ' done';
    }

    if (important){
        classNames += ' important';
        console.log("important");
    }


        return (
            <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onTooggleDone}
            >
                {label}
            </span>
           <button type="button"
                   onClick={onTooggleImportant}
                   className="btn btn-outline-success btn-sm float-right">
               <FontAwesomeIcon icon={faExclamation}/>
      </button>

      <button type="button"
              onClick={onDeleted}
              className="btn btn-outline-danger btn-sm float-right" >
      <FontAwesomeIcon icon={faTrash} />
      </button>
        </span>
        );
    };
}
