import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
  const Header = () => <h2>Header</h2>
  const Survey = () =><h2>Survey</h2>
  const Landing = () =><h2>Landing</h2>

  return(
    <BrowserRouter>
<div>
<Header/>
 <Route path="/" exact component={Landing}/>
 <Route path="/survey/new" component={Survey}/>

</div>

    </BrowserRouter>

  )

};

export default App;