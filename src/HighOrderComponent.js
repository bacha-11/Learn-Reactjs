import { useState } from "react";
import { Button } from "react-bootstrap";



function Display(){

    return(
        <div>
            <HODRed cmp={Counter} />
            <HODGreen cmp={Counter} />
        </div>
    )

}

export default Display;




function HODRed(props){
    return (
        <div style={{backgroundColor:'red', color:"white", margin:"10px"}}>
            <props.cmp />
        </div>
        
    )
}

function HODGreen(props){
    return (
        <div style={{backgroundColor:'green', color:"white", margin:"10px"}}>
            <props.cmp />
        </div>
    )
}




function Counter(){
    let [count, setCount] = useState(0)

    return(
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <Button onClick={()=>setCount(count+1)}>update</Button>
        </div>
    )
}