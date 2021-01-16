import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory, NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import Login from './components/Login'
import Elders from './components/Elders'
import Volunteer from './components/Volunteer'
import Nav from './components/Nav'
import SignUp from './components/SignUp';
import { fetchElderly, fetchVolunteers, fetchTasks } from './api';
import LoggingOut from './components/LoggingOut';

function App() {

  const [username, setUsername] = useState({})
  const [logged, setLogged] = useState(false)
  const [tasks, setTasks] = useState([])
  const [signup, setSignup] = useState(false)

  // console.log("tasks", tasks);

  useEffect(() => {
    fetchTasks()
      .then(json => setTasks(json))
  }, []);

  console.log(tasks)

  return (
    <div className="App">
      <Router>
        <Nav logged={logged}/>
        <Switch>
          <Route exact path='/'>
            <Login
              setLogged={setLogged} logged={logged} username={username} setUsername={setUsername} />
          </Route>
          
          <Route path='/logout'>
            <LoggingOut
              logged={logged} setLogged={setLogged}/>
          </Route>

          <Route path='/signup'>
            <SignUp
            signup={signup} setSignup={setSignup}
            username={username} setUsername={setUsername} />
          </Route>
          {logged && username === 'rubyred' && tasks ?
            <Route path='/home'>
              <Elders username={username} tasks={tasks} />
              <TaskList />
            </Route>
            :
            <Route path='/home'>
              <Volunteer tasks={tasks} />
            </Route>
          }
        </Switch>
      </Router>
    </div>
  );

}
export default App;