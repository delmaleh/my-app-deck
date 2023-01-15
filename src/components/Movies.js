import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./Movie";
import Mov from "./Mov";
export class Movies extends Component {
    constructor() {
    super();
    this.state = {
        movies: getMovies(),

    }
}
//handleDelete = () => {}
handleDelete = (movie) => {
    
    const movies= this.state.movies.filter((m)=> m._id!==movie._id);
    console.log(movies);
    this.setState({ movies: movies});
}
    


render(){
    
    
    //return count;
    return (
      <>  
        <table className="table">
         <thead>
             <tr>
                    <th>titre</th>
                    <th>genre</th>
                    <th>stock</th>
                    <th>Note</th>
                    
            </tr>
            
        </thead>
        <tbody>
       {this.state.movies.map((movie)=>(
         <tr key={movie._id}>
         <Mov title={movie.title} genre={movie.genre.name} number={movie.numberInStock} daily={movie.dailyRentalRate}></Mov>
         <td>  <button onClick={ () => this.handleDelete(movie)}
                className="btn btn-danger">Supprimer</button> </td>
         </tr>
         

       ))}
        
        </tbody>
        </table>
        </>
    )
}


}
export default Movies;