import React, {Component} from "react"
import axios from "axios"

class Body extends Component{
//Because we're returning more than just HTML we're using class, methods
    constructor(props){
        super(props)
        this.state = {
            APOD: {}
        }
    }
    
    //When page loads, call APOD API
    componentDidMount(){
        //axios api call
        axios.get('https://api.nasa.gov/planetary/apod?api_key=O6WqJw9BMceGV0Ny79hoBa934YAYs1HWKs5ycCk7')
            .then((response) => {
                this.setState({APOD: response.data})  
            })
            .catch(function(error){
                console.log(error);
            })
    }
    

    render(){
        const {APOD} = this.state

        
        return(
            <React.Fragment>
                <div class="container my-3">
                    <h1>{APOD.title}</h1>
                    <img src={APOD.url} class="img-fluid rounded-top " alt="" />
                    <p>{APOD.explanation}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Body