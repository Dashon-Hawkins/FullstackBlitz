import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import SurveyFields from './SurveyFields'

import {Link} from 'react-router-dom'


const FIELDS =
 [
{label:'Survey Title', name:'title'},
{label:'Subjct Line', name:'subject'},
{label:'Email Body', name:'body'},
{label:'Recipient List', name:'emails'},
 ]

class SurveyForms extends Component {
    renderFields() {
          //disturcuering fileds travacy
 return _.map(FIELDS, ({ label, name }) => {
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
              <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
              {this.renderFields()}
<Link
to="/surveys" className="red btn-flat white-text">Cancel</Link>
              <button
              type="submit"
              className="teal btn-flat right white-text">Next

<i className="material-icons right">done</i>
              </button>
              </form>

             </div>
         )
    }

}

export default reduxForm({
form: 'surveyForm'
}) (SurveyForms)