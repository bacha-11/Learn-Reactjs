import { useState } from "react";
import { Logout } from "./Logout";


function Condition(){
    let [login, setlogin] = useState(true)

    function SendFun(){
        alert('send data')
    }

    return(
        <div>
            login?
            <h1>hello user</h1>
            :<h1>hello guest</h1>

            <div>
                <Logout data={SendFun} />
            </div>
        </div>


    )
}

export default Condition;