import { withRouter } from "react-router";

function Employees(props){

    return(
        <div>
            <h1>this is employies component</h1>
            <h2>Epm id : {props.match.params.id} Employee Name is: {props.match.params.name}</h2>
        </div>
    )
}

export default withRouter(Employees);