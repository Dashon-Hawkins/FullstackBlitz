import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSurveys} from '../../actions'

class SurveysList extends Component {

    componentDidMount () {
         this.props.fetchSurveys();
    }
renderSurveys() {
    return this.props.surveyslist.map(survey =>
                    {
            return (
            <div className="card darken-1" key={survey.id}>
            <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
            {survey.body}
            </p>
            <p className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            </div>

            <div className="card-action">
            <a>YES:{survey.yes}</a>
            <a>NO:{survey.no}</a>
            </div>

            </div>
            )

    })

}


    render () {
         return (
              <div>
              {this.renderSurveys()}
              </div>
         )
    }

}

function mapStateToProps (state)
{
    console.log(state.fetchingSurveys)
    return {
        surveyslist:state.fetchingSurveys
    }

}


export default connect(mapStateToProps, {fetchSurveys} ) (SurveysList)