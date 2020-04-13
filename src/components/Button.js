import React from 'react';
import './Button.scss';

const Button = ({children, iconUrl = '', iconEl = null, onClick}) => {

    let icon;

    if( iconUrl === '' && iconEl === null ) {
       icon = null; 

    } else if( iconEl !== null ) {
        icon = <span className="btn-icon">
            {iconEl}
        </span>;
        
    } else if( iconUrl !== '' ) {
        icon = <span className='btn-icon'>
            <img src={iconUrl} alt=''/>
        </span>;
    }

    return (
        <button href className="btn" onClick={onClick}>
            <span>{children}</span>
            {icon}
        </button>
    );
}

export default Button;