import { useState } from "react";

function Condition(){
    let [login, setlogin] = useState(true)

    return(
        login?
        <h1>hello user</h1>
        :<h1>hello guest</h1>
    )
}

export default Condition;