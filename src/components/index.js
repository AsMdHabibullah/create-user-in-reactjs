import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderComponent from './header'
import LoginUser from './user/login'
import RegisterUser from './user/register'


const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route path="/user/login/user" component={LoginUser} />
        <Route path="/user/login/admin" component={LoginUser} />
        <Route path="/user/register" component={RegisterUser} />
      </Switch>
    </Router>
  );
}

export default App;
