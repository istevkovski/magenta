import React, {Component} from 'react';
import PersonDescription from './PersonDescription';
import ButtonHire from './ButtonHire';
import HeaderNavigation from './HeaderNavigation';
import SocialLinks from './SocialLinks';
import ButtonCircle from './ButtonCircle';
import SideDisplay from './SideDisplay';
import FeatureDisplayCard from './FeatureDisplayCard';
import {firebase} from '../firebase/firebase';

class Home extends Component {
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
                <SideDisplay handleOfferingIncrease={this.offeringsPaginationIncrease} handleOfferingDecrease={this.offeringsPaginationDecrease}>
                    {offerings !== undefined ? offerings : ''}
                </SideDisplay>
            </div>
        );
    }
};

export default Home;