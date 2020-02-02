import React, {Component} from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import './style.css'
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";

export default class App extends Component{
   maxId = 100;

    state = {
        toDoData: [
            this.createToDoItem("Drink Coffe"),
            this.createToDoItem("Make Awesome App"),
            this.createToDoItem("Have a lunch"),
        ],
        term:" "
    };

    createToDoItem(label){
                 const newItem = {
                     label: label,
                     important: false,
                     done: false,
                     id: this.maxId++
                 };
                 return newItem;
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
        const newItem=this.createToDoItem(text);
            const newArray = [
                ...toDoData,
                newItem
            ];
            return {
                toDoData:newArray
            }
        });
    };

    toggleProperty(arr,id,propName){
        const idx = arr.findIndex((el)=>el.id===id);
        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]:!oldItem[propName]};
        return [
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ];
    }

    onTooggleImportant=(id)=> {
        this.setState(({toDoData})=>{
            return {
                toDoData:this.toggleProperty(toDoData,id,'important')
            }
        });
    };

    onTooggleDone=(id)=> {
        this.setState(({toDoData})=>{
            return {
                toDoData:this.toggleProperty(toDoData,id,'done')
            }
        });
    };

    onTooggleAllFilter=()=>{
        console.log("All");
    };

    onTooggleActiveFilter=()=>{
        this.setState(({toDoData})=>{
            const idx = toDoData.filter((el)=>el.done===false);
            const newArray = [
                ...idx
            ];
            return {
                filter:newArray
            }
        });
    };

    onTooggleDoneFilter=()=>{
        const {toDoData} = this.state;
            const idx = toDoData.filter((el)=>el.done);
            const newArray = [
                ...idx
            ];
            return {
                toDoData:newArray
            }

    };
    onLabelSearch=(term)=>{
        this.setState({term});
    };

    search(items,term){
        if(term.length===0){
            return items;
        }

       return  items.filter((item)=>{
            return item.label.toLowerCase.indexOf(term.toLowerCase())>-1;
        })
    }

    render(){
        const {toDoData,term} = this.state;

        const visibleItems = this.search(toDoData,term);

        const doneCount = toDoData.filter((el)=>el.done).length;
        const todoCount = toDoData.length - doneCount;
        return (
            <div className="todo-app ">
                <AppHeader todo={todoCount} done={doneCount}/>
                <SearchPanel onLabelSearch={this.onLabelSearch}/>
                <ItemStatusFilter onTooggleAllFilter={this.onTooggleAllFilter}
                                  onTooggleActiveFilter={this.onTooggleActiveFilter}
                                  onTooggleDoneFilter={this.onTooggleDoneFilter}/>
                <ToDoList
                    todos = {visibleItems}
                    onDeleted = {this.deleteItem}
                    onTooggleDone={this.onTooggleDone}
                    onTooggleImportant={this.onTooggleImportant}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}
