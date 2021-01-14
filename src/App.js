import React from 'react';
import { Switch, Route , Redirect } from 'react-router-dom'
import PrivateRoute from './components/privateRoute/PrivateRoute';

import NavBar from './components/landing/NavBar';
import './App.css';
import Login from './components/form/Login';
import Footer from './components/landing/Footer';
import EmployeeList from './components/users/EmployeeList';

const App = () => {
  return (
      <div className="App">
        <NavBar/>
        <Switch>
          <PrivateRoute exact path="/" component={EmployeeList} />
          <Route exact path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer/>
      </div>
  );
}

export default App;
