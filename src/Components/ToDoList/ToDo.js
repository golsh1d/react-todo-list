import './ToDo.css'
import React, { Component } from 'react';
import { MdDoneOutline } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";

export default class ToDo extends Component {
  completeToDo(id) {
      this.props.onComplete(id)
  }  

  removeToDo(id) {
    this.props.onRemove(id)
  }

  render() {
    let {id , title , completed} = this.props
    return (
      <div className='ToDo-wrapper'>
        {!completed ? 
        <div className='ToDo-title'>{title}</div> : 
        <div className='ToDo-title' style={ {textDecoration : "line-through"} }>{title}</div>}
        <div className='ToDo-icons-wrapper'>
            <MdDoneOutline className='ToDo-icon ToDo-done-icon' onClick={this.completeToDo.bind(this , id)}/>
            <IoTrashBin className='ToDo-icon ToDo-trash-icon' onClick={this.removeToDo.bind(this , id)}/>
        </div>
      </div>
    )
  }
}