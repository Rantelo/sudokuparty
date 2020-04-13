import React from 'react';
import './DifficultySelector.scss';

const DifficultySelector = ({options, setter}) => {

    function handleOnSelect(e) {
        setter(e.target.selectedIndex);
    }

    return(
        <div className="select-component" >
            <select onChange={handleOnSelect}>
                {options.map( (option, value) => 
                    <option value={value} key={value}>{option}</option>
                )}
            </select>
        </div>
    );
}

export default DifficultySelector;