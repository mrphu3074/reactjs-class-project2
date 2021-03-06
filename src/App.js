import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './Routes/admin/Home';
import Web from './Routes/web/Home';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Web} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
