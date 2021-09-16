import React from "react";
import { Button } from "react-bootstrap";


// Pure Component use to stop rendering when the previous and current are same
class PureComponents extends React.PureComponent{
    constructor(){
        super()
        this.state={
            count : 1
        }
    }

    
    render(){
        console.log("rerendring in component")
        return(
            <div>
                <h1>Pure Component {this.state.count}</h1>
                <Button onClick={()=>this.setState({count:1})}>Increase</Button>
            </div>
        )
    }
}


export default PureComponents;