import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            senderId: '',
            senderFamilyName: '',
            senderMessage: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        if(event.target.id === 'senderId')
            this.setState({senderId: event.target.value});
        else if(event.target.id === 'senderFamilyName')
            this.setState({senderFamilyName: event.target.value});
        else if(event.target.id === 'senderMessage')
            this.setState({senderMessage: event.target.value});
    }

    render() {
        return (
            <div className={`contact-form`}>
                <h2>Get in touch!</h2>
                <div className='tiny-form'>
                    <div className="field">
                        <label htmlFor="senderId">Name:</label>
                        <input id="senderId" type="text" value={this.state.senderId} onChange={this.handleOnChange} />
                    </div>

                    <div className="field">
                        <label htmlFor="senderFamilyName">Surname:</label>
                        <input id="senderFamilyName" value={this.state.senderFamilyName} onChange={this.handleOnChange} type="text"/>
                    </div>

                    <div className="field">
                        <label htmlFor="senderMessage">Body:</label>
                        <textarea id="senderMessage" value={this.state.senderMessage} onChange={this.handleOnChange}/>
                    </div>
                </div>
                <a href={`mailto:istevkovski@outlook.com?subject=MagentaMail:%20${this.state.senderId}%20${this.state.senderFamilyName}
                    &body=${encodeURIComponent(this.state.senderMessage)}`}>
                    Send!
                </a>
            </div>
        );
    }
};

export default ContactForm;