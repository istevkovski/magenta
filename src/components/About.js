import React, {Component} from 'react';
import PersonDescription from './PersonDescription';
import HeaderNavigation from './HeaderNavigation';
import SocialLinks from './SocialLinks';
import SideDisplay from './SideDisplay';
import ProfileImage from './ProfileImage';
import FeatureDisplayCard from './FeatureDisplayCard';
import {firebase} from '../firebase/firebase';
import AboutInformation from "./AboutInformation";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            sideDisplayPagination: 0
        };

        this.sideDisplayPaginationIncrease = this.sideDisplayPaginationIncrease.bind(this);
        this.sideDisplayPaginationDecrease = this.sideDisplayPaginationDecrease.bind(this);
    }

    sideDisplayPaginationIncrease() {
        if(this.state.sideDisplayPagination < this.state.projects.length - 3){
            this.setState({sideDisplayPagination: this.state.sideDisplayPagination + 1});
        }
    }

    sideDisplayPaginationDecrease() {
        if(this.state.sideDisplayPagination > 0) {
            this.setState({sideDisplayPagination: this.state.sideDisplayPagination - 1});
        }
    }

    async sideDisplayCardsLoadHelper() {
        const snapshot = await firebase.firestore().collection("projects").orderBy("enum", "asc").get();
        this.setState({projects: snapshot.docs.map(doc => doc.data())});
    }

    async componentDidMount() {
        await this.sideDisplayCardsLoadHelper();
    }

    render() {
        const that = this;
        const projects = this.state.projects.map(function (item, index) {
            if(index >= that.state.sideDisplayPagination && index < that.state.sideDisplayPagination + 3){
                return (<FeatureDisplayCard key={`project${index}`}>
                    {
                        <div className="project-card">
                            <div>
                                <i className="fab fa-angrycreative fa-3x"></i>
                                {<div className="content" dangerouslySetInnerHTML={{__html:item.icon}}></div>}
                            </div>
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                            <a href={item.link} target="blank">{item.link}</a>
                        </div>
                    }
                </FeatureDisplayCard>);
            } else {
                return null;
            }
        });

        return (
            <div className="about main-view">
                <div className="main-display">
                    <HeaderNavigation aboutActive="active"/>
                    <div className="person-information wrapper-flex margin-default-bottom" style={{alignItems: "center"}}>
                        <ProfileImage/>
                        <PersonDescription className="margin-default-left"/>
                    </div>
                    <AboutInformation/>
                    <SocialLinks marginPosition="both" />
                </div>
                <SideDisplay handleOfferingIncrease={this.sideDisplayPaginationIncrease} handleOfferingDecrease={this.sideDisplayPaginationDecrease}>
                    {projects !== undefined ? projects : ''}
                </SideDisplay>
            </div>
        );
    }
};

export default About;