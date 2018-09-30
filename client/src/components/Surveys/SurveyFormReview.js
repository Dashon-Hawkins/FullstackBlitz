import _ from 'lodash';
import React from 'react'
import {connect} from 'react-redux'

import formFields from './formfields'

const SurveyReview = ({ onCancel, formReviewValues}) =>
{
    const reviewFields = _.map(formFields, ({ label, name }) => {

         return (
            <div key={name}>
             <label>{label}</label>
               <div>
                {formReviewValues[name]}
                </div>
            </div>
         )

    })



    // console.log(formReviewValue)
    return (
        <div>
        <h1>Survey Form Review</h1>
        {reviewFields}
        <button className="yellow darken-3 btn-flat"
        onClick={onCancel}>

<i className="material-icons left">arrow_back</i>


        Back </button>
        </div>
    )

}

function mapStateToProps(state) {
    // console.log(state)
    return {

        formReviewValues:state.form.surveyForm.values

    }

}



export default connect(mapStateToProps)(SurveyReview)
