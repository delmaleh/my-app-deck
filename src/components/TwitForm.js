
import React, { useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

function TwitForm(props)  {
    
    const twit= props.twit;

    const handleSubmit = (e) => {
        e.preventDefault();
        const twitName = e.target.name.value;
        const twitContent = e.target.content.value;
        const newTwit= {name:twitName,content:twitContent,like:0}
        props.handleSubmit(newTwit);
        e.target.name.value='';
        e.target.content.value='';
    }
  
  return(
            <form className="twit-form" onSubmit={handleSubmit}>
            
                <h4>New twit</h4>
                <input type="text" name="name"></input>
                <input type="text" name="content"></input>
                <input type="submit"></input>
            </form>
            
  )
}


export default TwitForm;