import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header/Header';
import ToDoList from './Components/ToDoList/ToDoList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ToDoList />
      </div>
    )
  }
}