import Twit from "./Twit"
import { useState } from "react";
function TwitList(props) {
    const twits = props.twits;
    
    const handleDelete = (newTwit) => {
        const newTwits= twits.filter(twit => newTwit.id!=twit.id);
        props.handleDelete(newTwits);
        
    }

    return (
        <div className="twit-container">{twits.map((twit)=> (
        
            <Twit id={twit.id} twit={twit} handleDelete={handleDelete} ></Twit>
        ))
        }</div>
    )
}

export default TwitList