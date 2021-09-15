import {Table} from 'react-bootstrap';


function ArrayObject(){
    
    const names = ['ijaz', 'zaid', 'nisar', 'tariq']
    const students = [
        {name:'ijaz', email:'ijaz@test.com', age:10},
        {name:'zaid', email:'zaid@test.com', age:20},
        {name:'nisar', email:'nisar@test.com', age:30},
        {name:'tariq', email:'tariq@test.com', age:40}
    ]

    return(
        <div>
        {
            names.map((item, index)=>
                <h3 key={index}>{item}</h3>
            )
        }
            <Table>
            <tbody>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>age</th>
                </tr>
            {
                students.map((item, i)=>
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                </tr>
                )
            }
            </tbody>
                 
            </Table>
        </div>
    )
}

export default ArrayObject;
