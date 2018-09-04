import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'

class App extends Component {

  componentDidMount () {

  }

  render() {
  const Survey = () =><h2>Survey</h2>
  const Landing = () =><h2>Landing</h2>

  return(
    <div className="container">
    <BrowserRouter>
   <div>
<Header/>
 <Route path="/" exact component={Landing}/>
 <Route path="/survey/new" component={Survey}/>
</div>
    </BrowserRouter>
</div>
  )
  }
};

export default App;