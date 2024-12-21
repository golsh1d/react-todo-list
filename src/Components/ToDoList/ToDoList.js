import React, { useState } from 'react'
import './ToDoList.css'
import { CgMathPlus } from "react-icons/cg";
import ToDo from './ToDo';

export default function ToDoList() {
    
    let [toDoInput , setToDoInput] = useState('')
    let [toDoList , setToDoList] = useState([])
    let [status , setStatus] = useState('All')
    
    let changeInputHandler = (event) => {
        setToDoInput(event.nativeEvent.target.value)
    }
    
    let addToDo = () => {
        if (toDoInput) {
            let newToDo = {
                id : toDoList.length + 1 ,
                title : toDoInput ,
                completed : false ,
            }
    
            setToDoList(prevState => {
                return [...prevState , newToDo]
            })
    
            setToDoInput('')
        }
    }
    
    let keyDownInputHandler = (event) => {
        if(event.key === 'Enter') {
            addToDo()
        }
    }
    
    let completeToDo = (ToDoId) => {
        let mainToDo = toDoList.find(toDo => {
            if (toDo.id === ToDoId) {
                return toDo
            }
        })
    
        mainToDo.completed = !mainToDo.completed
    
        let newToDoList = toDoList

        setToDoList([...newToDoList])
    }
    
    let removeToDo = (ToDoId) => {
        let newToDoList = toDoList.filter(toDo => {
            return toDo.id !== ToDoId
        })
    
        setToDoList(newToDoList)
    }
    
    let selectHandler = (event) => {
        setStatus(event.target.value)
    }
    
    return (
        <div className='ToDoList-wrapper'>
          <div className='ToDoList-top-section'>
              <div className='ToDoList-input-wrapper'>
                  <input type="text" placeholder='to do ...' value={toDoInput} onKeyDown={(event) => keyDownInputHandler(event)} onChange={(event) => changeInputHandler(event)}/>
                  <CgMathPlus className='ToDoList-add-icon' onClick={addToDo}/>
              </div>
              <select onChange={(event) => selectHandler(event)}>
                  <option value="All">All</option>
                  <option value="Completed">Completed</option>
                  <option value="Uncompleted">Uncompleted</option>
              </select>
          </div>
          {
              status === 'All' && toDoList.map(todo => (
                  <ToDo key={todo.id} {...todo} onComplete={completeToDo} onRemove={removeToDo}/>
              ))
          }
          {
              status === 'Completed' && toDoList.filter(todo => {
                  return todo.completed
              }).map(todo => (
                  <ToDo key={todo.id} {...todo} onComplete={completeToDo} onRemove={removeToDo}/>
              ))
          }
          {
              status === 'Uncompleted' && toDoList.filter(todo => {
                  return !todo.completed
              }).map(todo => (
                  <ToDo key={todo.id} {...todo} onComplete={completeToDo} onRemove={removeToDo}/>
              ))
          }
        </div>
    )
}
