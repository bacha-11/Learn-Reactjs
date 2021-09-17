import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


function FetchApi(){
    let [user, setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
            result.json().then((resp)=>{
                // console.log('result********', resp)
                setUser(resp)
            })
        })
    })

    return(
        <div>
            <h1>Fetch Api component</h1>

            <Table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                    {
                        user.map((item)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed}</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default FetchApi;