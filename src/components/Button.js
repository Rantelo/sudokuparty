import React from 'react';
import './Button.scss';

const Button = ({children, iconUrl = '', onClick}) => {

    const icon = (iconUrl !== '') && <span className='btn-icon'>
        <img src={iconUrl} alt=''/>
    </span>;

    return (
        <button className="btn" onClick={onClick}>
            <span>{children}</span>
            {icon}
        </button>
    );
}

export default Button;