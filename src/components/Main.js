import React from "react";
import Businesses from './Businesses.js';
import Employees from './Employees.js';
import Home from './Home.js';
import Login from './Login.js';
import { Switch, Route } from 'react-router-dom';
import EmployeesByBusiness from "./EmployeesByBusiness";


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/businesses' component={Businesses}/>
      <Route path='/employees' component={Employees}/>
      <Route path='/login' component={Login}/>
    </Switch>
    <Route path='/employees/:id' component={EmployeesByBusiness}/>
  </main>
)

export default Main
