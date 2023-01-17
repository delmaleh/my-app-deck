import TwitForm from "./TwitForm";
import "./Twits.css";
import { useState } from "react";
import TwitList from "./TwitList";


function Twits() {
    const [twits, setTwits] = useState([])
    const handleDelete = (newTwits) => {
        setTwits(newTwits); 
    }
   

    const handleSubmit = (newTwit) => {
        newTwit.id=twits.length+1;
        const newTwits= prevTwits => { return [...prevTwits,newTwit]};
    
        setTwits(newTwits);
    }
    return( 
    <>
     <TwitForm handleSubmit={handleSubmit}/>
     <TwitList twits={twits} handleDelete={handleDelete} />
       
    </>
    )
}

export default Twits;