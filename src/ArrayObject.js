import {Table} from 'react-bootstrap';
import Students from './Students';


function ArrayObject(){
    
    const names = ['ijaz', 'zaid', 'nisar', 'tariq']
    const students = [
        {name:'ijaz', email:'ijaz@test.com', age:10},
        {name:'zaid', email:'zaid@test.com', age:20},
        {name:'nisar', email:'nisar@test.com', age:30},
        {name:'tariq', email:'tariq@test.com', age:40}
    ]

    const user = [
        {name:'ijaz', email:'ijaz@test.com', address:[
            {house:'11', country:"pakistan"},
            {house:'12', country:"pakistan"}
        ]},
        {name:'zaid', email:'zaid@test.com', address:[
            {house:'111', country:"pakistan"},
            {house:'121', country:"pakistan"}
        ]},
        {name:'nisar', email:'nisar@test.com', address:[
            {house:'112', country:"pakistan"},
            {house:'122', country:"pakistan"}
        ]},
        {name:'tariq', email:'tariq@test.com', address:[
            {house:'113', country:"pakistan"},
            {house:'123', country:"pakistan"}
        ]}
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


            <Table variant='dark' striped>
                <tbody>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>age</th>
                </tr>
            {
                user.map((item, i)=>
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                    <Table variant='dark' striped>
                    <tbody>
                        {
                        item.address.map((data, j)=>
                        <tr key={j}>
                            <td>{data.house}</td>
                            <td>{data.country}</td>
                        </tr>
                        )
                        }
                    </tbody>
                    </Table>
                    </td>
                </tr>
                )
            }
                </tbody>
            </Table>



            <label>Looping compontent</label>
            <Table>
            
            <tbody>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>age</th>
                </tr>

            {
                students.map((item, i)=>
                    <Students data={item} key={i}/>
                )
            }
            </tbody>
            </Table>
        </div>
    )
}

export default ArrayObject;
