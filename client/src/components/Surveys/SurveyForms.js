import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyFields from './SurveyFields';
import ValidateEmails from '../../utils/validateEmails'
import {Link} from 'react-router-dom';
import formFields from './formfields';
class SurveyForms extends Component {
    renderFields() {
          //disturcuering fileds travacy
 return _.map(formFields, ({ label, name }) => {
return <Field key={name} component ={SurveyFields} type="text" label={label} name={name}/>

//generalway

// return _.map(FIELDS, fields=> {
//     return <Field key={fields.name} component ={SurveyFields} type="text" label={fields.label} name={fields.name}/>

 })



//        return(
//    <div>
//    <Field
//    label="Survey Title"
//    type="text"
//    name="surveyTitle"
//    component={SurveyFields}
//    />
//    <Field
//    label="Subject Line"
//     type="text"
//    name="subjectLine"
//    component={SurveyFields}
//    />
//    <Field
//    label="Email Body"
//    type="text"
//    name="body"
//    component={SurveyFields}
//    />
//    <Field
//     label="Recipient List"
//     type="text"
//     name="recipient"
//     component={SurveyFields}
//    />
//    </div>
//        )
    }

    render () {
         return (
             <div>
              <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
              {this.renderFields()}
<Link
to="/surveys" className="red btn-flat white-text">Cancel</Link>
              <button
              type="submit"
              className="teal btn-flat right white-text">Next

<i className="material-icons right">arrow_forward</i>
              </button>
              </form>

             </div>
         )
    }

}

function validate(values) {

   const errors = {};
   errors.emails=ValidateEmails(values.emails || '');
    if(!values.title) {
        errors.title = 'You must provide a tittle'
    }

    if(!values.subject) {
        errors.subject = 'You must provide a Subject'
    }

    if(!values.body) {
        errors.body = 'You must provide a body'
    }

    if(!values.emails) {
        errors.emails = 'You must provide a emails'
    }




    return errors

}


export default reduxForm({
validate:validate,
form: 'surveyForm',
destroyOnUnmount:false
}) (SurveyForms)