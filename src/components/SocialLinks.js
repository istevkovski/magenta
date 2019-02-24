import React from 'react';
import ButtonCircle from "./ButtonCircle";

const SocialLinks = props => {
    return (
        <div className={`social-links ${props.marginPosition}`}>
            <ButtonCircle href="https://www.linkedin.com/in/istevkovski/" socialMedia="linkedin"/>
            <ButtonCircle href="https://www.facebook.com/istevkovski" socialMedia="facebook"/>
            <ButtonCircle href="https://www.instagram.com/istevkovski/" socialMedia="instagram"/>
            {props.children}
        </div>
    );
};

export default SocialLinks;