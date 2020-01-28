import React, {Component} from "react";


export default class ItemAddForm extends Component{
    render(){
        const {addItem}=this.props;
        return (
            <div className="todo-app ">
                <button type="button"
                        onClick={()=>addItem("Work hard")}
                        className="btn btn-outline-secondary">Add new item</button>
            </div>
        );
    }
}