// Dependencies
import React, { Component } from 'react';
// Externals
import Field from './field';
import Button from './button';
import './contact.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
        // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
        this.updateField = this.updateField.bind(this);
    }

    // Field could be 'name', 'email', or 'message'
    // Value is whatever the user types into the input field.
    updateField(field, value) {
        this.setState({ [field]: value });
    }

    render() {
        return (
            <div >
                <span className="contact1-form-title">
					GET IN TOUCH
				</span>
                <hr/>
                {/* Name field */}
                <Field
                    label="Name"
                    onChange={(event) => this.updateField('name', event.target.value)}
                    value={this.state.name}
                />
                {/* Email field */}
                <Field
                    label="Email"
                    onChange={(event) => this.updateField('email', event.target.value)}
                    value={this.state.email}
                />
                {/* Message textarea */}
                <Field
                    label="Message"
                    onChange={(event) => this.updateField('message', event.target.value)}
                    /* This should be written like 'textarea' */
                    textarea={true}
                    value={this.state.message}
                />
                {/* Submit button */}
                <Button
                    email="thanseehabdulla@gmail.com"
                    formValues={this.state}
                />
            </div>
        );
    }
}

export default Form;