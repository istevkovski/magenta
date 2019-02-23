import React, {Component} from 'react';
import PersonDescription from './PersonDescription';
import ButtonHire from './ButtonHire';
import HeaderNavigation from './HeaderNavigation';
import SocialLinks from './SocialLinks';
import ButtonCircle from './ButtonCircle';
import SideDisplay from './SideDisplay';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="home main-view">
                <div className="main-display">
                    <HeaderNavigation />
                    <div className="wrapper-flex margin-default-bottom" style={{alignItems: "center"}}>
                        <PersonDescription />
                    </div>
                    <ButtonHire>About Page!</ButtonHire>
                    <SocialLinks marginPosition="both">
                        <ButtonCircle socialMedia="linkedin"/>
                        <ButtonCircle socialMedia="facebook"/>
                        <ButtonCircle socialMedia="instagram"/>
                    </SocialLinks>
                </div>
                <SideDisplay />
            </div>
        );
    }
};

export default About;