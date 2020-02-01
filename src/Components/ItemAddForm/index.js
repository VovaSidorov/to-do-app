import React, {Component} from "react";


export default class ItemAddForm extends Component{
    state ={
      label:''
    };
    onLabelChange=(e)=>{
        // console.log(e.target.value);
        this.setState({
           label:e.target.value
        });
    };
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        });
    };
    render() {
        return (
            <form className="item-add-form"
                  onSubmit={this.onSubmit}>

                <input type="text"
                       className="form-control mt-3"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value ={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary  mt-3">
                    Add Item
                </button>
            </form>
        );
    }
}