import React, {Component} from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import './style.css'
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";

export default class App extends Component{
    state = {
        toDoData: [
            {label:"Drink Coffe", important: false, id:1},
            {label:"Make awesome App", important: true, id:2},
            {label:"Have a lunch", important: false, id:3}
        ]
    };

    deleteItem=(id)=>{
        this.setState(({toDoData})=>{
            const idx = toDoData.findIndex((el)=>el.id===id);
            const newArray = [
                ...toDoData.slice(0,idx),
                ...toDoData.slice(idx+1)
            ];
            return {
                toDoData:newArray
            }
        });
    };

    addItem=(text)=>{
        this.setState(({toDoData})=>{
        const newItem={
            label:text,
            important:false,
            id:toDoData[toDoData.length-1].id+1
        };
            const newArray = [
                ...toDoData,
                newItem
            ];
            return {
                toDoData:newArray
            }


        });
    };

    render(){
        return (
            <div className="todo-app ">
                <AppHeader todo={1} done={2}/>
                <SearchPanel />
                <ItemStatusFilter/>
                <ToDoList
                    todos = {this.state.toDoData}
                    onDeleted = {this.deleteItem}
                />
                <ItemAddForm addItem={this.addItem}/>
            </div>
        );
    }
}
