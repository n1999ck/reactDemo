import React, {Component} from "react"
import Nav from './Nav'
class Body extends Component{
//Because we're returning more than just HTML we're using class, methods
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    render(){
        const increment = () => {
            console.log("Made it!!!!")
            this.setState({count: this.state.count + 1})
        }
        return(
            <button type="button" className="btn btn-outline-primary" onClick={increment}>
                {this.state.count}
               
            </button>
        )
    }
}

export default Body