import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'

class SurveyForms extends Component {

    render () {
         return (
             <div>
              <form onSubmit={this.props.handleSubmit(values => console.log(values))}>

<Field type="text" name="surveyTitle" component="input"/>
<Field type="text" name="surveySubject" component="input"/>
              <button type="submit">Submit</button>
              </form>

             </div>
         )
    }

}

export default reduxForm({
form: 'surveyForm'
}) (SurveyForms)