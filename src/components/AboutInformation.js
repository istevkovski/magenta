import React, {Component} from 'react';
import {firebase} from "../firebase/firebase";

class AboutInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };

        this.firebasePullSkills = this.firebasePullSkills.bind(this);
    }

    async firebasePullSkills() {
        const snapshot = await firebase.firestore().collection("skills").orderBy("enum", "asc").get();
        this.setState({skills: snapshot.docs.map(doc => doc.data())});
    }

    componentDidMount() {
        this.firebasePullSkills();
    }

    render() {
        return (
            <div className="about-information">
                <div><p>Profession:</p><span className='color-text-orange'>Front-end Developer</span></div>
                <div><p>Experience:</p><span className='color-text-orange'>1.2 years</span></div>
                <div className="highlights">
                    <p>Hightlights:</p>
                    <div>
                        <span>Part of more than <span className='color-text-orange'>20</span> projects</span>
                        <span>Over <span className='color-text-orange'>20</span> certificates</span>
                        <span>Part of a <span className='color-text-orange'>professional</span> company</span>
                        <span>Full-time <span className='color-text-orange'>Front-end Developer</span></span>
                    </div>
                </div>
                <div className="skills">
                    <p>Skills:</p>
                    <div>
                        {this.state.skills.length ?
                            this.state.skills.map(function (item) {
                                return <span>{item.skill}</span>
                                })
                            : ''}
                    </div>
                </div>
            </div>
        );
    }
};

export default AboutInformation;