import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import SurveyFields from './SurveyFields'

class SurveyForms extends Component {
    renderFields() {
       return(
   <div>
   <Field type="text" name="surveyTitle" component={SurveyFields}/>
   </div>
       )
    }

    render () {
         return (
             <div>
              <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
              {this.renderFields()}
              <button type="submit">Submit</button>
              </form>

             </div>
         )
    }

}

export default reduxForm({
form: 'surveyForm'
}) (SurveyForms)