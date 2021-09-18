import { useState } from "react";
import { Button } from "react-bootstrap";



function PostApiMethod(){
    const [title, setTile] = useState("")
    const [complete, setComplete] = useState(false)

    function saveData(){
        // console.log(title, complete)
        const data = {title, complete}
        fetch('https://jsonplaceholder.typicode.com/todos',{
            method: 'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        })
    }

    return(
        <div>
            <input type='text' value={title} name="title" onChange={(e)=>setTile(e.target.value)}></input><br />
            <input type='checkbox' value={complete} name="completed" onChange={(e)=>setComplete(e.target.checked)}></input><br />
            <Button onClick={saveData}>SUBMIT</Button>
        </div>
    )
}

export default PostApiMethod;