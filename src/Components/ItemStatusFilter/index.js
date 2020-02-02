import React, {Component} from 'react';
import './style.css'

export default class ItemStatusFilter extends Component{
    buttos=[
        {name:"all",label:'all'},
        {name:"active",label:'Active'},
        {name:"done",label:'Done'},
    ];
    render() {
        const {filter,onFilterChange}=this.props;

       const buttons = this.buttos.map(({name,label})=>{
           const isActive = filter === name;
           const clazz = isActive ? 'btn-info':"rtn-outline-secondary";
           return (
               <button type="button"
                       className={`btn ${clazz}`}
                        key={name}
                       onClick={()=>onFilterChange(name)}
               >
                   {label}</button>
           )
       });


        return (
            <div className="btn-group d-flex align-items-end mb-3">
                {buttons}
            </div>
        );
    };
}

