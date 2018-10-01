import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSurveys} from '../../actions'

class SurveysList extends Component {

    componentDidMount () {
         this.props.fetchSurveys();
    }

    render () {
         return (
              <div>
               <h1>Surveylist</h1>
              </div>
         )
    }

}

function mapStateToProps (state)
{
    return {
        surveyslist:state.fetchingSurveys
    }

}


export default connect(mapStateToProps, {fetchSurveys} ) (SurveysList)