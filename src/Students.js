import {Table} from 'react-bootstrap';

function Students(props){

    return(
            
                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.email}</td>
                    <td>{props.data.age}</td>
                </tr> 
           
    )
}


export default Students;