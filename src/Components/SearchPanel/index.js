import React, {Component} from 'react';
import './style.css'



export default class SearchPanel extends Component{

    state={
      term:''
    };

    onLabelSearch=(e)=>{
      const term = e.target.value;
      this.setState({term});
      this.props.onLabelSearch(term);
    };
    render() {
        const searchText = 'Type here to search';
        return (

            <input type="text"
                   className="form-control mb-3"
                   onChange={this.onLabelSearch}
                   value={this.state.term}
                   placeholder={searchText} />
        );
    }


};
