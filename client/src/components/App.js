import React, { Component } from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Dashboard from './Dashboard'

import Header from './Header';
import Landing from './landing'

const SurveyNew = () =><h1>New Survey</h1>


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/survey/new" component={SurveyNew}/>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);