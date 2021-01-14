
import './App.css';
import React, { Component } from 'react';
import TaskList from './components/TaskList';
import Login from './components/Login'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <h1> HELLO </h1>
      <TaskList />
      <Login />
      <HomePage/>
    </div>
  );
}
export default App;