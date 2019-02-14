import React from 'react';
import PersonDescription from './PersonDescription';
import ButtonHire from './ButtonHire';
import HeaderNavigation from './HeaderNavigation';
import SocialLinks from './SocialLinks';
import ButtonCircle from './ButtonCircle';
import SideDisplay from './SideDisplay';

const Home = () => {
    return (
        <div className="home main-view">
            <div>
                <HeaderNavigation />
                <PersonDescription />
                <ButtonHire>Hire Me!</ButtonHire>
                <SocialLinks marginPosition="both">
                    <ButtonCircle socialMedia="linkedin"/>
                    <ButtonCircle socialMedia="facebook"/>
                    <ButtonCircle socialMedia="instagram"/>
                </SocialLinks>
            </div>
            <SideDisplay />
        </div>
    );
};

export default Home;