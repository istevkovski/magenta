import React from 'react';

const ButtonHire = props => {
    return (
        <button className={`button-hire ${props.className !== undefined ? props.className : ''}`}>
            {props.children}
            <i className="material-icons">keyboard_arrow_right</i>
        </button>
    );
};

export default ButtonHire;