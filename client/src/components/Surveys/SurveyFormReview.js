import React from 'react'

import {connect} from 'react-redux'
const SurveyReview = ({ onCancel, formReviewValue}) =>
{
    console.log(formReviewValue)
    return (
        <div>
        <h1>Survey Form Review</h1>
        <label>title</label>
         <div>{formReviewValue.title}</div>
         <label>subject</label>
         <div>{formReviewValue.subject}</div>
         <label>body</label>
         <div>{formReviewValue.body}</div>
         <label>emails</label>
         <div>{formReviewValue.emails}</div>

        <button className="yellow darken-3 btn-flat"
        onClick={onCancel}
        >Back </button>
        </div>
    )

}

function mapStateToProps(state) {
    // console.log(state)
    return {

        formReviewValue:state.form.surveyForm.values

    }

}



export default connect(mapStateToProps)(SurveyReview)
