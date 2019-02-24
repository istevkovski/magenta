import React from 'react';

const ButtonCircle = props => {
    const classPass = props.socialMedia !== undefined ? props.socialMedia : "";

    return (
        <button className={`button-circle ${classPass} ${props.className}`} onClick={props.onClick}>
            <i className={props.material !== undefined ? "material-icons" : "fab"}>{props.material !== undefined ? props.material : ""}</i>
        </button>
    );
};

export default ButtonCircle;