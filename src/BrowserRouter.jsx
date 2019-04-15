import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

import Home from './Home'
import History from './History'

class MainRouter extends Component {
   render(){
      return (
         <BrowserRouter>
            <div>
               <NavLink exact to="/"> Home </NavLink>
               <NavLink to="/Notre Histoire" activeClassName="selected"> History </NavLink>

               <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/Notre Histoire" component={History} />
               </Switch>
            </div>
         </BrowserRouter>
      )
   }
}
export default MainRouter;
