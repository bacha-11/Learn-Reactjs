import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import ComponentDidMountExample from "./ComponentDidMount"
import ComponentDidUpdateExample from "./ComponentDidUpdate"

// useEffect hook is work like ComponentDidMount and ComponentDidUpdate
function UseEffectHook(){
    let [count, setCount] = useState(0)
    let [data, setData] = useState(10)

    useEffect(()=>{
        console.log('UseEffectHook')
    },[count])

    return(
        <div>
            <h1>UseEffectHook count-{count}, data-{data}</h1>
            <button onClick={()=>{setCount(count+1)}}>Update Count</button>
            <button onClick={()=>{setData(data+1)}}>Update Data</button>
        </div>
    )
}

export default UseEffectHook;