import { Button } from "react-bootstrap";
import { useState } from "react/cjs/react.development";
import GetPreviousProps from "./GetPreviousProps"


function GetPreviousState(){
    let [count, setCount] = useState(0)


    function handleCounter(){
        
        setCount((prev)=>{
            console.log(prev)
            if (prev >= 5){
                return "now previous is equalTo " + prev
            }
            return count+1
        })
    }

    return(
        <div>
            <h1>Get Previous State</h1>
            <h3>Current : {count}</h3>
            <GetPreviousProps count={count} />
            <Button onClick={handleCounter}>Counter</Button>

        </div>
    )
}

export default GetPreviousState;