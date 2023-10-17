import React, {useEffect, useState} from "react"

function BodyHooks(){
    const [count, setCount] = useState(0) //initializes count
    const [count2, setCount2] = useState(10)

   

    useEffect(() => {
       console.log(count) 
    }, [count])

    useEffect(() => {
        console.log(count2) 
     }, [count2])

    return(
        <React.Fragment>
        <button type="button" className="btn btn-primary" onClick={ () => setCount(count + 1)}>
                {count} 
            </button>
        <button type="button" class="btn btn-outline-primary" onClick={ () => setCount2(count2 + 10)}>{count2}</button>
        </React.Fragment>
    )
}
export default BodyHooks