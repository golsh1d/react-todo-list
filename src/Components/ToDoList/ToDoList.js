import React, { Component } from 'react'
import './ToDoList.css'
import { CgMathPlus } from "react-icons/cg";
import ToDo from './ToDo';

export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
        toDoInput : '' ,
        toDoList : [] , 
        status : 'All' ,
    }

    this.changeInputHandler = this.changeInputHandler.bind(this)
    this.addToDo = this.addToDo.bind(this)
    this.keyDownInputHandler = this.keyDownInputHandler.bind(this)
    this.completeToDo = this.completeToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
    this.selectHandler = this.selectHandler.bind(this)
  }  

  changeInputHandler(event) {
    this.setState({
        toDoInput : event.nativeEvent.target.value
    })
  }

  addToDo() {
    if (this.state.toDoInput) {
        let newToDo = {
            id : this.state.toDoList.length + 1 ,
            title : this.state.toDoInput ,
            completed : false ,
        }

        this.setState(prevState => {
            return {toDoList : [...prevState.toDoList , newToDo]}
        })

        this.setState({
            toDoInput : ''
        })
    }
  }

  keyDownInputHandler(event) {
    if(event.key === 'Enter') {
        this.addToDo()
    }
  }

  completeToDo(ToDoId) {
    let mainToDo = this.state.toDoList.find(toDo => {
        if (toDo.id === ToDoId) {
            return toDo
        }
    })

    mainToDo.completed = !mainToDo.completed

    let newToDoList = this.state.toDoList

    this.setState({
        toDoList : newToDoList
    })
  }

  removeToDo(ToDoId) {
    let newToDoList = this.state.toDoList.filter(toDo => {
        return toDo.id !== ToDoId
    })

    this.setState({
        toDoList : newToDoList
    })
  }

  selectHandler(event) {
    this.setState({
        status : event.target.value
    })
  }

  render() {
    return (
      <div className='ToDoList-wrapper'>
        <div className='ToDoList-top-section'>
            <div className='ToDoList-input-wrapper'>
                <input type="text" placeholder='to do ...' value={this.state.toDoInput} onKeyDown={(event) => this.keyDownInputHandler(event)} onChange={(event) => this.changeInputHandler(event)}/>
                <CgMathPlus className='ToDoList-add-icon' onClick={this.addToDo}/>
            </div>
            <select onChange={(event) => this.selectHandler(event)}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </div>
        {
            this.state.status === 'All' && this.state.toDoList.map(todo => (
                <ToDo key={todo.id} {...todo} onComplete={this.completeToDo} onRemove={this.removeToDo}/>
            ))
        }
        {
            this.state.status === 'Completed' && this.state.toDoList.filter(todo => {
                return todo.completed
            }).map(todo => (
                <ToDo key={todo.id} {...todo} onComplete={this.completeToDo} onRemove={this.removeToDo}/>
            ))
        }
        {
            this.state.status === 'Uncompleted' && this.state.toDoList.filter(todo => {
                return !todo.completed
            }).map(todo => (
                <ToDo key={todo.id} {...todo} onComplete={this.completeToDo} onRemove={this.removeToDo}/>
            ))
        }
      </div>
    )
  }
}