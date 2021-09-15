


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
            names.map((item)=>
                <h3>{item}</h3>
            )
        }
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>age</th>
                </tr>
            {
                students.map((item)=>
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                </tr>
                )
            }
                 
            </table>
        </div>
    )
}

export default ArrayObject;
