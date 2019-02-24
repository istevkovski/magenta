import React from 'react';
import {Link} from "react-router-dom";

const HeaderNavigation = props => {

    return (
        <nav className="header-navigation">
            <Link to="/" className="brand">Magenta.</Link>
            <div>
                <Link to="/about" className={`link ${props.aboutActive !== undefined ? props.aboutActive : ''}`}>About</Link>
                <Link to="/about" className="link">Learn More</Link>
                <Link to="/contact" className={`link ${props.contactActive !== undefined ? props.contactActive : ''}`}>Contact</Link>
            </div>
        </nav>
    );
};

export default HeaderNavigation;