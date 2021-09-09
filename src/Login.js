import { useState } from 'react'

function Login(props) {



    return (
        <div>
            <h1>Welcome Mr. {props.name}</h1>
            <h1>Email : {props.email}</h1>
            <h1>Address : {props.other.address}</h1>
            <h4>Phone : {props.other.phone} </h4>
        </div>

    )

}

export default Login;

