import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from './Pages/Login';
import {Home} from './Pages/Home'
import {NewLogin} from './Pages/NewLogin';


function Routes() {
  return (
      <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={NewLogin}/> 
                <Route path="/home"  component={Home}/> 
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default Routes;