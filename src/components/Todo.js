import { Component } from "react";
import React, { useState,useRef } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";


function Todo(props)  {
    
    const todo = props.todo;
    
    const handleDelete = () => {
        props.handleDelete(todo);
       
      }
       
      const handleUpdate = () => {
        props.handleUpdate(todo);
      }
  return(
  
      <div>
        <button className="clear-btn" onClick={handleDelete}>
          <MdDelete />
        </button>
        
        <button className="edit-btn" onClick={handleUpdate}>
          <MdEdit />
        </button>
        {todo.value}
      </div>
     
      
  )
}


export default Todo;
