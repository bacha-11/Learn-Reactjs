import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


function FetchApi(){
    let [user, setUser] = useState([])
    let [title, setTitle] = useState("")
    let [check, setCheck] = useState()
    let [userId, setUserId] = useState(null)

    useEffect(()=>{
        getList()
    })


    // use this function to call when data has been delete so we cant refesh the page manully 
    function getList(){
        fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
            result.json().then((resp)=>{
                // console.log('result********', resp)
                setUser(resp)
                // setTitle(resp[0].title)
                // setCheck(resp[0].completed)
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


    function selectUser(id){
        let item = user[id-1]
        console.log(item)
        setTitle(item.title)
        setCheck(item.completed)
        setUserId(item.id)
    }

    function updateUser(){
        let data = [userId, title, check]
        fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`,{
            method:'PUT',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
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
                            <td><Button onClick={()=>selectUser(item.id)}>Update</Button></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>

            <div>
                <input type='text' value={title} name="title" onChange={(e)=>setTitle(e.target.value)}></input><br />
                <input type='checkbox' value={check} name="completed" onChange={(e)=>setCheck(e.target.value)}></input><br />
                <Button onClick={updateUser}>Update</Button>
            </div>
        </div>
    )
}

export default FetchApi;