import "./Budget.css";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';
import React, { useState,useRef,useEffect } from 'react';
import Alert from "./Alert";
import { MdSend,MdDelete } from "react-icons/md";

function Budget() {

    const [items, setItems] = useState([])
    const [alert, setAlert] = useState({ show: false });
    const [isShown,setIsShown] = useState(true);
    const [edit, setEdit] = useState(false);
    const [uid,setUid] = useState();
    const nameRef = useRef();
    const chargeRef = useRef();
    const KEY = "item";
   
    useEffect(() => {
  
        const tabItem = localStorage.getItem(KEY);
        const storedItems = JSON.parse(tabItem);
        if (storedItems) setItems(storedItems);
      
      }, []);
      
      useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(items));
        
      }, [items]);
      
        

  // handle alert
 const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  }
   
const handleAdd = (e) => {
  
  const name=nameRef.current.value;
  const charge=parseInt(chargeRef.current.value===''?0:chargeRef.current.value);
  if ((name==='')||(charge<=0)) {
    handleAlert({
        type: "danger",
        text: `charge and amount must be filled correctly`
      });
    return;
  }
  if (edit) {
    const newItems = items.map(item => {
        return item.id === uid ? { ...item, name,charge } : item;
      });
    setItems(newItems);
    setEdit(false);
    handleAlert({
        type: "success",
        text: "item modified"
      });
  }
  else {
    const newItems=[...items,{id:uuidv4(),name:name,charge:charge}];
    setItems(newItems);
    handleAlert({
        type: "success",
        text: "item added"
      });
  }  
  nameRef.current.value=null;
  chargeRef.current.value=null;

}


const handleDelete = (m) => {      
 const newItems= items.filter(item => m.id!=item.id);
 setItems(newItems); 
}

const handleUpdate = (m) => {
  setEdit(true);
  setUid(m.id);    
}
const clearItems = () => {
    setItems([]);
}

return(
<>
  {alert.show && <Alert type={alert.type} text={alert.text} />}  
  
  <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            ref={nameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            ref={chargeRef}
        
          />
        </div>
      </div>
      <div align="center">
      <button type="button" className="btn" onClick={handleAdd}>
        {edit ? "edit" : "add"}
       
        <MdSend className="btn-icon" />
      </button> 
      </div>  

  
  <ul className="list">
  {items.map((item)=> (
      <Item key={item.id} item={item} handleDelete={handleDelete} handleUpdate={handleUpdate}></Item>
  ))
  }
  </ul>
  <div align="center">
  {items.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear items
          <MdDelete className="btn-icon" />
        </button>
  )}
<p/>
<h1>
        total :
        <span className="total">
          $
          {items.reduce((acc, curr) => {
            return (acc += curr.charge);
          }, 0)}
        </span>
      </h1>
    </div>

</>   
    
)
}
export default Budget;
