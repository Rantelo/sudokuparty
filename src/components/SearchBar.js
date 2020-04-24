import React from 'react';
import './SearchBar.scss';

const SearchBar = ({handleInputChange, termSearch, onSearch}) => {

    return (
        <div className="search-wrapper">
            <span>
                <input type="text" placeholder="Party code" value={termSearch} onChange={handleInputChange} />
            </span>
            <span>
                <button className="search-btn" onClick={onSearch}>
                    <i className="fas fa-search" />
                </button>
            </span>
        </div>
    );
}

export default SearchBar;