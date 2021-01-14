import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory, NavLink } from "react-router-dom";
import React, { Component } from 'react';
import TaskList from './components/TaskList';
import Login from './components/Login'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
    <Router>
      <div id='nav'>
        <NavLink to='/' exact></NavLink>
        <NavLink to='/login' className='tabs'>Login</NavLink>
        <NavLink to='/signUp' className='tabs'>SignUp</NavLink>
        <NavLink to='/tasks' className='tabs'>Tasks</NavLink>
        <NavLink to='/profile' className='tabs'>Profile</NavLink>
      </div>
      <h1> HELLO </h1>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/tasks'>
          <TaskList/>
        </Route>
        {/* <Route path='/profile'>
          { volunteer or elder ? <Elders/> : <Volunteer/>}
        </Route> */}
        {/* need to see how we are pulling info to do this */}
      </Switch>
    </Router>
    </div>
  );

}
export default App;

// diff name for tasks in nav Bar
// containers should be in their components (which will show under profile)