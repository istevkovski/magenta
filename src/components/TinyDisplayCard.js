import React from 'react';

const TinyDisplayCard = props => {
    return (
        <div className="tiny-display-card">
            {props.children}
        </div>
    );
};

export default TinyDisplayCard;