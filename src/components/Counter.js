import { Component } from "react";

export class Counter extends Component {
    constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      key:this.props.key,
      counter:this.props.counter
    }
    
}

handleIncrement = () => {
  this.setState({value:this.state.value+1})
}
handleReset = () => {
  this.setState({value:0})
}
handleDelete = () => {}
render () {
  return(
  <>
       <div>       
         
         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
         <button onClick={() => this.handleIncrement()} className="btn btn-secondary btn-sm" >increment</button>
         <button onClick={() => this.handleReset()} className="btn btn-secondary btn-sm" >reset</button>
         <button onClick={() => this.props.onDelete(this.state.counter)}
                className="btn btn-danger">Supprimer</button> 
        </div>

  </>   
      
  )
}
getBadgeClasses = () => {
 let classes= "badge m2 fs-6 bg-";
 classes+= this.state.value===0 ? "warning" : "primary";
 return classes;
}
formatCount = () => {
  
  //const { value }= this.state;
  return this.state.value===0 ? "zero" : this.state.value;
}
}
export default Counter;
    
