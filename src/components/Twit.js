
import  { useState } from 'react';
import {  GrFormClose } from "react-icons/gr";

function Twit(props)  {
  const twit= props.twit; 
  
  const [state,setState] = useState({
    id:twit.id,
    name:twit.name,
    content:twit.content,
    like:twit.like
  })

  const handleLike = () => {   
        setState({like: twit.like++})    
  }
  const handleDelete = ()  => {
    props.handleDelete(twit);
  }

  return(
    
    
    <div className='twit'>
        <button className='delete' onClick={handleDelete}><GrFormClose size={40} /></button>
        <h3>{twit.name}</h3>
        <p>{twit.content}</p>
        <p><button onClick={handleLike}>{twit.like} ♥</button></p>
        
    </div>
    
  )
}


export default Twit;