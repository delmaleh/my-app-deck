
/*import Component from "react"


export class Movie extends Component {
    constructor(props) {
    super(props);
    this.state = {
        title: this.props.title,
        genre:this.props.genre,
        number:this.props.number,
        daily:this.props.daily
    }
    
}

render () {
return (
    <>
     </>   
)
}
}

*/
export default function Movie({id,title,genre,number,daily,}) {
    return (
        <>
        <td>{title}</td>
         <td>{genre}</td>
         <td>{number}</td>
         <td>{daily}</td>
         
         </>   
    )
}

//export default Movie;