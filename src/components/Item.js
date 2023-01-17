import { Component } from "react";
import React, { useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

function Item(props)  {
    const item = props.item;
    
    
    

    
    const handleDelete = () => {
        //setIsSubscribed(event.target.checked);
        props.handleDelete(item);
       
      }
       
      const handleUpdate = () => {
        props.handleUpdate(item);
      }
  return(
    
    <li className="item">
    <div className="info">
      <span className="expense">{item.name}</span>
      <span className="amount">${item.charge}</span>
    </div>
    <div>
      <button
        className="edit-btn"
        aria-label="edit button"
        onClick={handleUpdate}
      >
        <MdEdit />
      </button>
      <button
        className="clear-btn"
        aria-label="delete button"
        onClick={handleDelete}
      >
        <MdDelete />
      </button>
    </div>
  </li> 
       
     
      
  )
}


export default Item;
