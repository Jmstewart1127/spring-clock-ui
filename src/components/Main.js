import React from "react";
import Home from '../App.js'
import Businesses from './Businesses.js'
import Employees from './Employees.js'
import TableExample from './TableExample.js'
import { Switch, Route } from 'react-router-dom'


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
      <Route path='/table' component={TableExample}/>
    </Switch>
  </main>
)

export default Main
