import { Component } from "react";
import React, { useState,useRef } from 'react';

function Todo(props)  {
    
    
    const [todo, setTodo] = useState({
      id:props.id,  
      value:props.value,
      complete:false,
    })
    

    
    const handleDelete = () => {
        //setIsSubscribed(event.target.checked);
        props.handleDelete(todo);
       
      }
       
      const handleUpdate = () => {
        props.handleUpdate(todo);
      }
  return(
  
       <div><input type="button" value="x"  onClick={handleDelete}/><input type="button" value="u"  onClick={handleUpdate}/>{todo.value}</div>
     
      
  )
}


export default Todo;
