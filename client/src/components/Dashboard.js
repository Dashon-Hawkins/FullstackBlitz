import React from 'react'
import {Link} from 'react-router-dom'
import SurveyList from './Surveys/SurveysList'
const Dashboard = () =>
{
    return (
        <div>
        <SurveyList/>
<div className="fixed-action-btn">
  <Link to="/survey/new" className="btn-floating btn-large red">
  <i className="material-icons">create</i>
  </Link>
</div>
        </div>

    )


}

export default Dashboard