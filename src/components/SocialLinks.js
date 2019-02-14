import React from 'react';

const SocialLinks = props => {
    return (
        <div className={`social-links ${props.marginPosition}`}>
            { props.children }
        </div>
    );
};

export default SocialLinks;