import React, {Component} from "react"
import axios from "axios"
import Nav from './Nav'
class Body extends Component{
//Because we're returning more than just HTML we're using class, methods
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            vehicle: {}
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevState)
    //     console.log(this.state)
    // }

    componentDidMount(){
        //axios api call
        axios.get('https://random-data-api.com/api/vehicle/random_vehicle')
            .then((response) => {
                console.log("Success")
                console.log(response.data)
                this.setState({vehicle: response.data})  
            })
            .catch(function(error){
                console.log(error);
            })
    }
    

    render(){
        const {vehicle} = this.state

        const increment = () => {
            console.log("Made it!!!!")
            this.setState({count: this.state.count + 1})
        }
        return(
            <React.Fragment>
            <button type="button" className="btn btn-outline-primary" onClick={increment}>
                {this.state.count}
            </button>
            <p>{vehicle.make_and_model}</p>
            </React.Fragment>
        )
    }
}

export default Body