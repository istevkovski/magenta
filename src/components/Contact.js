import React, {Component} from 'react';
import PersonDescription from './PersonDescription';
import HeaderNavigation from './HeaderNavigation';
import SocialLinks from './SocialLinks';
import SideDisplay from './SideDisplay';
import ProfileImage from './ProfileImage';
import ContactForm from './ContactForm';
import TinyDisplayCard from './TinyDisplayCard';
import {firebase} from '../firebase/firebase';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async sideDisplayCardsLoadHelper() {
        const snapshot = await firebase.firestore().collection("projects").orderBy("enum", "asc").get();
        this.setState({projects: snapshot.docs.map(doc => doc.data())});
        console.log(snapshot.docs.map(doc => doc.data()));
    }

    async componentDidMount() {

    }

    render() {

        return (
            <div className="contact main-view">
                <div className="main-display">
                    <HeaderNavigation contactActive="active"/>
                    <div className="person-information wrapper-flex margin-default-bottom" style={{alignItems: "center"}}>
                        <ProfileImage/>
                        <PersonDescription/>
                    </div>
                    <SocialLinks marginPosition="both" />
                    <div className="tiny-display-cards-wrapper margin-default-half-top margin-default-half-bottom">
                        <TinyDisplayCard>
                            <i className="fab fa-internet-explorer fa-3x"></i>
                            <h2>Support for IE11</h2>
                        </TinyDisplayCard>
                        <TinyDisplayCard>
                            <i className="fab fa-internet-explorer fa-3x"></i>
                            <h2>Support for IE11</h2>
                        </TinyDisplayCard>
                        <TinyDisplayCard>
                            <i className="fab fa-internet-explorer fa-3x"></i>
                            <h2>Support for IE11</h2>
                        </TinyDisplayCard>
                        <TinyDisplayCard>
                            <i className="fab fa-internet-explorer fa-3x"></i>
                            <h2>Support for IE11</h2>
                        </TinyDisplayCard>
                    </div>
                </div>
                <SideDisplay sideButtonsState='off' className="padding-default">
                    <ContactForm />
                </SideDisplay>
            </div>
        );
    }
};

export default Contact;