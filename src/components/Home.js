import React, {Component} from 'react';
import PersonDescription from './PersonDescription';
import ButtonHire from './ButtonHire';
import HeaderNavigation from './HeaderNavigation';
import SocialLinks from './SocialLinks';
import ButtonCircle from './ButtonCircle';
import SideDisplay from './SideDisplay';
import FeatureDisplayCard from './FeatureDisplayCard';

class Home extends Component {
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
                    <ButtonHire>Hire Me!</ButtonHire>
                    <SocialLinks marginPosition="both">
                        <ButtonCircle socialMedia="linkedin"/>
                        <ButtonCircle socialMedia="facebook"/>
                        <ButtonCircle socialMedia="instagram"/>
                    </SocialLinks>
                </div>
                <SideDisplay>
                    <FeatureDisplayCard className="padding-default">
                        <i className="fas fa-globe-europe fa-3x margin-default-half-bottom"></i>
                        <h4>Nearly 200 countries worldwide, because freelance has no limits!</h4>
                    </FeatureDisplayCard>

                    <FeatureDisplayCard className="padding-default">
                        <i className="fab fa-internet-explorer fa-3x margin-default-half-bottom"></i>
                        <h4>Support all platforms!</h4>
                    </FeatureDisplayCard>

                    <FeatureDisplayCard className="padding-default">
                        <img src="./assets/icons/brain.svg" alt="brain.svg" className="margin-default-half-bottom" style={{filter: 'invert(28%) sepia(14%) saturate(0%) hue-rotate(185deg) brightness(100%) contrast(89%)'}}/>
                        <h4>Don't think, hire a professional!</h4>
                    </FeatureDisplayCard>
                </SideDisplay>
            </div>
        );
    }
};

export default Home;