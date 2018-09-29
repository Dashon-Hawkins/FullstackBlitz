import React from 'react'
const SurveyReview = (props) =>
{
    return (
        <div>
        <h1>Survey Form Review</h1>
        <button className="yellow darken-3 btn-flat"
        onClick={props.onCancel}
        >Back </button>
        </div>
    )

}

export default SurveyReview
