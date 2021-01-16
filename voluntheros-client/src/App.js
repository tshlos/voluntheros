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
  // const [people, setPeople] = useState();
  const [logged, setLogged] = useState(false)
  const [tasks, setTasks] = useState([])
  const [loggedOut, setLoggedOut] = useState(false)

  // console.log("tasks", tasks);

  useEffect(() => {
    fetchTasks()
      .then(json => setTasks(json))
  }, []);




  // useEffect(() => {
  //   fetchElderly()
  //   // .then(console.log)
  //   .then(json => setPeople(json))

  //   fetchVolunteers()
  //   .then(json => {
  //     json.map(info => {
  //       setPeople(prevPeople => ([...prevPeople, info]))
  //     })
  //   })

  // }, []);

  console.log(tasks)

  return (
    <div className="App">
      <Router>
        <Nav logged={logged}/>
        <Switch>
          <Route path='/login'>
            <Login
              setLogged={setLogged} username={username} setUsername={setUsername} />
          </Route>
          
          <Route path='/logout'>
            <LoggingOut
              setLogged={setLoggedOut} username={username} setUsername={setUsername} />
          </Route>

          <Route path='/signup'>
            <SignUp
              username={username} setUsername={setUsername} />
          </Route>
          {/* <Route exact path='/'>
          <HomePage/>
        </Route> */}
          {/* <Route path='/tasks'>
          <TaskList/>
        </Route> */}
          {logged && username === 'rubyred' ?
            <Route path='/home'>

              <Elders username={username} tasks={tasks} />
              <TaskList />
            </Route>
            :
            <Route path='/home'>
              <Volunteer tasks={tasks} />
            </Route>}
        </Switch>
      </Router>
    </div>
  );

}
export default App;

// diff name for tasks in nav Bar
// containers should be in their components (which will show under profile)