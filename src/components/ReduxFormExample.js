import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ReduxFormExample extends Component {

    onSubmit = (formValues) => {
        console.log(formValues)
    }
    renderTextInput = (formProps) => {
        return (
            <div className="input-field col s12">
                <input {...formProps.input} className="validate" placeholder={formProps.placeholder}></input>
            </div>
        )
    }
    renderTextAreaInput = ({input}) => {
        return (
            <textarea {...input} ></textarea>
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

export default reduxForm({
    form: 'reduxFormExample'
})(ReduxFormExample)
