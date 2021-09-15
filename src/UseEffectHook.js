import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import ComponentDidMountExample from "./ComponentDidMount"
import ComponentDidUpdateExample from "./ComponentDidUpdate"

// useEffect hook is work like ComponentDidMount and ComponentDidUpdate
function UseEffectHook(){
    let [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('UseEffectHook')
    })

    return(
        <div>
            <h1>UseEffectHook {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Update Count</button>
        </div>
    )
}

export default UseEffectHook;