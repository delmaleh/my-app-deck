import { Component } from "react";
import Card from "./Card";

export class App3 extends Component {
    constructor(){
        super();
        this.state= {
          city:"jerusalem",
          lastname:"daniel",
          name:"dd",
        };
    }


    render () {

        return (
        <>
        <Card city={this.state.city} lastname={this.state.lastname} name={this.state.name}/>
        
        
        </>
        )
    }
}
export default App3;