import React, {Component} from 'react';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'


export default class ToDoListItem extends Component{
    onLabelClick=()=>{
        console.log(`click ${this.props.label}`)
    }

    render() {
    const {label , important=false}=this.props;

        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style }
                onClick={this.onLabelClick}
            >
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
}
