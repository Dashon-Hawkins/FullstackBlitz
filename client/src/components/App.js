import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
  const Header = () => <h2>Header</h2>
  const Survey = () =><h2>Survey</h2>

  return(
    <BrowserRouter>
<div>
 <Route path="/" component={Header} />
</div>

    </BrowserRouter>

  )

};

export default App;