import React, {Component} from 'react';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'


export default class ToDoListItem extends Component{
    state = {
        done: false,
        important: false
    };

    onLabelClick=()=>{
       this.setState(({done})=>{
           return {
               done: !done
           };
       });
    };

    onMarkImportant=()=>{
        this.setState(({important})=>{
            return {
                important: !important
            };
        });
    };

    render() {
    const {label, onDeleted}=this.props;
    const {done, important} = this.state;

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
                onClick={this.onLabelClick}
            >
                {label}
            </span>
           <button type="button"
                   onClick={this.onMarkImportant}
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
