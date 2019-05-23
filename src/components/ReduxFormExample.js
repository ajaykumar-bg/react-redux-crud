import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ReduxFormExample extends Component {

    onSubmit = (formValues) => {
    }

    renderError = ({error, touched}) => {
        if (touched && error) {
            return <div>{error}</div>
        }
    }
    renderTextInput = (formProps) => {
        return (
            <div className="input-field col s12">
                <input {...formProps.input} className="validate" placeholder={formProps.placeholder}></input>
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        )
    }
    renderTextAreaInput = (formProps) => {
        return (
            <div className="input-field col s12">
                <textarea {...formProps.input} ></textarea>
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        )
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <h3>Redux Form Example</h3>
                <Field name="title" component={this.renderTextInput} placeholder="Enter title"/>
                <Field name="description" component={this.renderTextAreaInput} placeholder="Enter description"/>
                <button className="btn" type="submit">Submit</button>
            </form>
        )
    }
}

const validateForm = (formValues) => {
    const errors = {};
    if(!formValues.title) errors.title = 'Please add a title'
    if(!formValues.description) errors.description = 'Please add some description'
    return errors;
}

export default reduxForm({
    form: 'reduxFormExample',
    validate: validateForm
})(ReduxFormExample)
