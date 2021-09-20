import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


function FetchApi(){
    let [user, setUser] = useState([])

    useEffect(()=>{
        getList()
    })


    // use this function to call when data has been delete so we cant refesh the page manully 
    function getList(){
        fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
            result.json().then((resp)=>{
                // console.log('result********', resp)
                setUser(resp)
            })
        })
    }


    function deleteData(id){
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                getList()
            })
        })
    }

    return(
        <div>
            <h1>Fetch Api component</h1>

            <Table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Delete</th>
                    </tr>
                    {
                        user.map((item)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={"/user/"+item.id}>{item.title}</Link></td>
                            <td>{item.completed}</td>
                            <td><Button onClick={()=>deleteData(item.id)}>Delete</Button></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default FetchApi;