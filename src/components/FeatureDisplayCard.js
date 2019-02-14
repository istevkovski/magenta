import React from 'react';
import Loading from './Loading';

const FeatureDisplayCard = props => {
    console.log(props);
    console.log(props.postsPulled);

    return (
        <div className={`feature-display-card ${props.className}`}>
            {props.postsPulled > 0 ? props.children : <Loading/>}
        </div>
    );
};

export default FeatureDisplayCard;