import React from 'react';

const ButtonCircle = props => {
    const classPass = props.socialMedia !== undefined ? props.socialMedia : "";
    const fontAwesomeType = props.fontAwesome !== undefined ? props.fontAwesome : "fab";

    return (
        <a className={`button-circle ${classPass} ${props.className !== undefined ? props.className : ''}`} aria-label={props.socialMedia !== undefined ? props.socialMedia : 'Circle Button.'} href={props.href} target="_blank" rel="noopener noreferrer" onClick={props.onClick}>
            <i className={props.material !== undefined ? "material-icons" : fontAwesomeType}>{props.material !== undefined ? props.material : ""}</i>
        </a>
    );
};

export default ButtonCircle;