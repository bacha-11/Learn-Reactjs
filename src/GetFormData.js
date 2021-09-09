import { useState } from "react";

function GetFormData(){

    let [name, setname] = useState()
    let [password, setpassword] = useState()
    let [user, setuser] = useState()
    let [remember, setremember] = useState(false)

    console.log(name, password, user, remember)

    function getdata(e){
        e.preventDefault()
        console.log(name, password, user, remember)
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={getdata}>
                <input type='text' placeholder='enter name' onChange={(e)=>setname(e.target.value)} /> <br /><br />
                <input type='password' placeholder='enter password' onChange={(e)=>setpassword(e.target.value)} /><br /><br />
                <select onChange={(e)=>setuser(e.target.value)}>
                    <option>select option</option>
                    <option>owner</option>
                    <option>admin</option>
                </select><br /><br />
                <input type='checkbox' onChange={(e)=>setremember(e.target.checked)} /> <span>REmember Me</span><br /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default GetFormData;