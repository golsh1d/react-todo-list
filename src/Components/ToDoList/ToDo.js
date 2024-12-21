import './ToDo.css'
import React from 'react';
import { MdDoneOutline } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";

export default function ToDo({id , title , completed , onComplete , onRemove}) {
  let completeToDo = (id) => {
    onComplete(id)
  }  

  let removeToDo = (id) => {
    onRemove(id)
  }

  return (
    <div className='ToDo-wrapper'>
      {!completed ? 
      <div className='ToDo-title'>{title}</div> : 
      <div className='ToDo-title' style={ {textDecoration : "line-through"} }>{title}</div>}
      <div className='ToDo-icons-wrapper'>
          <MdDoneOutline className='ToDo-icon ToDo-done-icon' onClick={() => completeToDo(id)}/>
          <IoTrashBin className='ToDo-icon ToDo-trash-icon' onClick={() => removeToDo(id)}/>
      </div>
    </div>
  )
}