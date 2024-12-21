import './App.css';
import React from 'react'
import Header from './Components/Header/Header';
import ToDoList from './Components/ToDoList/ToDoList';


export default function App() {
  return (
    <div>
      <Header />
      <ToDoList />
    </div>
  )
}