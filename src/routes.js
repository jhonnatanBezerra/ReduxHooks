import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from './Pages/Login';
import {Home} from './Pages/Home'


function Routes() {
  return (
      <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/> 
                <Route path="/home"  component={Home}/> 
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default Routes;