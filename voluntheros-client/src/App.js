import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory, NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import Login from './components/Login'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp';
import { fetchElderly, fetchVolunteers } from './api';

function App() {

  const [username, setUsername] = useState({ })
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchElderly()
    .then(console.log)
    // .then(json => setPeople(json))
  }, []);

  useEffect(() => {
    fetchVolunteers()
    .then(json => setPeople(prevPeople => ([...prevPeople, json])))
  }, []);

  console.log(people)
  return (
    <div className="App">
    <Router>
      <div id='nav'>
        <NavLink to='/' exact>Volunthero</NavLink>
        <NavLink to='/login' className='tabs'>Login</NavLink>
        <NavLink to='/signUp' className='tabs'>SignUp</NavLink>
        <NavLink to='/home' className='tabs'>Home</NavLink>
        {/* <NavLink to='/tasks' className='tabs'>Tasks</NavLink> */}
      </div>
      <Switch>
        <Route path='/login'>
          <Login username={username} setUsername={setUsername}/>
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        {/* <Route exact path='/'>
          <HomePage/>
        </Route> */}
        <Route path='/tasks'>
          <TaskList/>
        </Route>
        <Route path='/home'>
          {/* { volunteer or elder ? <Elders/> : <Volunteer/>} */}
        </Route>
        {/* need to see how we are pulling info to do this */}
      </Switch>
    </Router>
    </div>
  );

}
export default App;

// diff name for tasks in nav Bar
// containers should be in their components (which will show under profile)