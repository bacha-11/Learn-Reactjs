import { useState } from "react/cjs/react.development";



function UseStateHook(){
    let [count, setCount] = useState(0)

    return(
        <div>
            <h1>UseState Hook {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Update Count</button>
        </div>
    );
}

export default UseStateHook;