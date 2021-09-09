import {useState} from 'react'

function Login(){

    const [data, setdata] = useState(0)
    
    return(
        <h1>Welcome Mr. {data}</h1>
    )
    
}

export default Login;

