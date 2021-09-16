import { useMemo } from "react";
import { Button } from "react-bootstrap";
import { PureComponent, useState } from "react/cjs/react.development";

// UseMemo work like PureComponent
function UseMemoHook(){

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(0)

    const showMulWithMemo = useMemo(function showMul(){
        console.log('showMul')
        return item * 2
    }, [item])
    

    return(
        <div>
            <h1>UseMemo Hook</h1>
            <h1>Count : {count}</h1>
            <h1>Item : {item}</h1>
            <h1>{showMulWithMemo}</h1>
            
            <Button onClick={()=>setCount(count+1)}>count</Button>
            <Button onClick={()=>setItem(item+1)}>item</Button>
        </div>
    )
}

export default UseMemoHook;