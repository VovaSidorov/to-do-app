import React from 'react';
import './style.css'

const SearchPanel = () => {
    const searchText = 'Type here to search';
    return (

        <input className="form-control mb-3" placeholder={searchText} />
    );
};

export default SearchPanel;