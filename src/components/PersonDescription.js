import React from 'react';

const PersonDescription = props => {
    return (
        <div className={`person-description ${props.className !== undefined ? props.className : ''}`}>
            <h2>Ivan Stevkovski</h2>
            <p>Experienced Frontend Developer and <br/> UI/UX Design Enthusiast.</p>
        </div>
    );
};

export default PersonDescription;