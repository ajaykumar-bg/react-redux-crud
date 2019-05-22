import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ReduxFormExample extends Component {
    renderTextInput = (formProps) => {
        return (
            <input {...formProps.input} ></input>
        )
    }
    renderTextAreaInput = (formProps) => {
        return (
            <textarea {...formProps.input} ></textarea>
        )
    }
    render() {
        return (
            <div>
                <h3>Redux Form Example</h3>
                <Field name="title" component={this.renderTextInput}/>
                <Field name="description" component={this.renderTextAreaInput}/>
            </div>
        )
    }
}

export default reduxForm({
    form: 'reduxFormExample'
})(ReduxFormExample)
