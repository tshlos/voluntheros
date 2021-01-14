import './App.css';
import React, { Component } from 'react';
import TaskList from './components/TaskList';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <h1> HELLO </h1>
      <TaskList />
      <Login />
    </div>
  );

}
export default App;