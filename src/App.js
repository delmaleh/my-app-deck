

/*
import { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import logo from './logo.svg';
import './App.css';

/*

*/


/*
render(){
    
    
    //return count;
    return (
      <>  
        <table>
         <thead>
             <tr>
                    <th>titre</th>
                    <th>genre</th>
                    <th>stock</th>
                    <th>Note</th>
                    
            </tr>
            
        </thead>
        <tbody>
       {this.state.movies.map((movie)=>{
         <tr >
         <td>{console.log(movie.title)}{movie.title}</td>
         <td>{movie.genre.name}</td>
         <td>{movie.numberInStock}</td>
         <td>{movie.dailyRentalRate}</td>
         </tr>

       })}
        
        </tbody>
        </table>
        </>
    )
}


}
*/

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class App extends Component{
  constructor(){
    super();
    this.state= {
      count:0,
    };
  }
  
  render () {
   return (
      
      <div><button onClick={() => this.setState({ count:0 })}>remise a zero</button> 
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Incr[{this.state.count}]</button>
      </div>
  
   );    
  }
}

export default App;
