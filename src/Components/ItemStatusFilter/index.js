import React, {Component} from 'react';
import './style.css'

export default class ItemStatusFilter extends Component{
    render() {
        const {onTooggleAllFilter,onTooggleActiveFilter,onTooggleDoneFilter}=this.props;

        return (
            <div className="btn-group d-flex align-items-end mb-3">
                <button type="button"
                        onClick={onTooggleAllFilter}
                        className="btn btn-info">All</button>
                <button type="button"
                        onClick={onTooggleActiveFilter}
                        className="btn btn-outline-secondary">Active</button>
                <button type="button"
                        onClick={onTooggleDoneFilter}
                        className="btn btn-outline-secondary">Done</button>
            </div>
        );
    };
}

