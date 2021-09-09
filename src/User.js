import { useState } from "react"

function User(){
    let [status, setstatus] = useState(true)
    return(
        <div>
        {
            status?
            <h1>User Component.</h1>
            :null
        }
        <button onClick={()=>setstatus(false)}>hide</button>
        <button onClick={()=>setstatus(true)}>show</button>
        <button onClick={()=>setstatus(!status)}>toggle</button>
            
        </div>
    )
}

export default User