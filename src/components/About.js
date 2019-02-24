import React, {Component} from 'react';
import PersonDescription from './PersonDescription';
import ButtonHire from './ButtonHire';
import HeaderNavigation from './HeaderNavigation';
import SocialLinks from './SocialLinks';
import ButtonCircle from './ButtonCircle';
import SideDisplay from './SideDisplay';
import ProfileImage from './ProfileImage';
import FeatureDisplayCard from './FeatureDisplayCard';
import {firebase} from '../firebase/firebase';
import AboutInformation from "./AboutInformation";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offerings: [],
            offeringsPagination: 0
        };

        this.offeringsPaginationIncrease = this.offeringsPaginationIncrease.bind(this);
        this.offeringsPaginationDecrease = this.offeringsPaginationDecrease.bind(this);
    }

    offeringsPaginationIncrease() {
        if(this.state.offeringsPagination < this.state.offerings.length - 3){
            this.setState({offeringsPagination: this.state.offeringsPagination + 1});
        }
    }

    offeringsPaginationDecrease() {
        if(this.state.offeringsPagination > 0) {
            this.setState({offeringsPagination: this.state.offeringsPagination - 1});
        }
    }

    async offeringsLoadHelper() {
        const snapshot = await firebase.firestore().collection("offerings").orderBy("enum", "asc").get();
        this.setState({offerings: snapshot.docs.map(doc => doc.data())});
        console.log(snapshot.docs.map(doc => doc.data()));
    }

    async componentDidMount() {
        await this.offeringsLoadHelper();
    }


    render() {
        const that = this;
        const offerings = this.state.offerings.map(function (item, index) {
            if(index >= that.state.offeringsPagination && index < that.state.offeringsPagination + 3){
                return (<FeatureDisplayCard key={`offering${index}`} className="padding-default">
                    {
                        <div>
                            {<div className="content" dangerouslySetInnerHTML={{__html:item.icon}}></div>}
                            <h4>{item.description}</h4>
                        </div>
                    }
                </FeatureDisplayCard>);
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
                    <SocialLinks marginPosition="both">
                        <ButtonCircle socialMedia="linkedin"/>
                        <ButtonCircle socialMedia="facebook"/>
                        <ButtonCircle socialMedia="instagram"/>
                    </SocialLinks>
                </div>
                <SideDisplay handleOfferingIncrease={this.offeringsPaginationIncrease} handleOfferingDecrease={this.offeringsPaginationDecrease}>
                    {offerings !== undefined ? offerings : ''}
                </SideDisplay>
            </div>
        );
    }
};

export default About;