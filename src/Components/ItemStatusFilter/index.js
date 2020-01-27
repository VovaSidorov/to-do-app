import React, {Component} from 'react';
import './style.css'

export default class ItemStatusFilter extends Component{
    render() {
        return (
            <div className="btn-group d-flex align-items-end mb-3">
                <button type="button"
                        className="btn btn-info">All</button>
                <button type="button"
                        className="btn btn-outline-secondary">Active</button>
                <button type="button"
                        className="btn btn-outline-secondary">Done</button>
            </div>
        );
    };
}

