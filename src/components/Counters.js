import { Component } from "react";
import Counter from "./Counter";
import { v4 as uuidv4 } from 'uuid';

export class Counters extends Component {
    constructor() {
    super();
    this.state = {
    counters:[
    
    { id:uuidv4(),value:3},
    { id:uuidv4(),value:0},
    { id:uuidv4(),value:1},
    { id:uuidv4(),value:0},
    { id:uuidv4(),value:2},
    ]};
    
    
}

handleDelete = (counter) => {
    
    const counters= this.state.counters.filter((m)=> m.id!==counter.id);
    this.setState({ counters: counters});
}
 

render () {
  return(
      this.state.counters.map((count)=> (
      <Counter key={count.id} value={count.value} counter={count} onDelete={this.handleDelete}></Counter>

      ))
  )
}
}
export default Counters;