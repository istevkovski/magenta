import React from 'react';

const ButtonCircle = props => {
    const classPass = props.socialMedia !== undefined ? props.socialMedia : "";

    return (
        <a className={`button-circle ${classPass} ${props.className}`} href={props.href} target="_blank" onClick={props.onClick}>
            <i className={props.material !== undefined ? "material-icons" : "fab"}>{props.material !== undefined ? props.material : ""}</i>
        </a>
    );
};

export default ButtonCircle;