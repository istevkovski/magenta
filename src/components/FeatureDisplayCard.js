import React from 'react';

const FeatureDisplayCard = props => {

    return (
        <div className={`feature-display-card ${props.className}`}>
            {props.children}
        </div>
    );
};

export default FeatureDisplayCard;