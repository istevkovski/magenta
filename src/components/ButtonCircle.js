import React from 'react';

const ButtonCircle = props => {
    return (
        <button className={`button-circle ${props.socialMedia}`}>
            <i className="fab"></i>
        </button>
    );
};

export default ButtonCircle;