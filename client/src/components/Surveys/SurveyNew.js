import React, {Component} from 'react'
import SurveyForm from './SurveyForms'
import SurveyformReview from './SurveyFormReview'

class  SurveyNew extends Component{

    state = {
        showFormReview :false
    }


    renderContent () {
        if(this.state.showFormReview) {
          return  <SurveyformReview
          onCancel = { () => this.setState({
             showFormReview:false
          })}

          />
        }

         return <SurveyForm
         onSurveySubmit = { () =>this.setState({ showFormReview:true})}/>
    }


    render () {
         return (
             <div>
             {this.renderContent()}
             </div>
         )
    }

}

export default SurveyNew