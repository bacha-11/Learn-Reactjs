import { withRouter } from "react-router"



function FetchApiUserView(props){

    return(
        <div>
            <h1>Fetch Api User View</h1>
            <h3>User Id is: {props.match.params.id} </h3>
        </div>
    )
}

export default withRouter(FetchApiUserView)