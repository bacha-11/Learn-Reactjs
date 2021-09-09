import { useState } from 'react'

function Login(props) {



    return (
        <div>
            <h1>Welcome Mr. {props.name}</h1>
            <h1>Email : {props.email}</h1>
        </div>

    )

}

export default Login;

