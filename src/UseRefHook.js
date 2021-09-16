import { useRef } from "react";
import { Button } from "react-bootstrap";
import ForwardRefHook from "./ForwordRefHook";


function UseRefHook(){
    let inputRef = useRef(null)

    function handleInput(){
        inputRef.current.value='11111'
        inputRef.current.focus()
    }

    return(
        <div>
            <h1>UseRef Hook for functional components.</h1>
            <input type="text" ref={inputRef} /><br />

            <ForwardRefHook ref={inputRef} />
            <Button onClick={handleInput}>handle Input</Button>
        </div>
    )
}

export default UseRefHook;