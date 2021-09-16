import { Component, createRef } from "react";
import { Button } from "react-bootstrap";


class Ref extends Component{
    constructor(){
        super();
        this.inputRef = createRef()

        this.state={
            name:''
        }
    }

    render(){
        return(
            <div>
                <h1>Ref in class compontent</h1>
                <h1>name : {this.state.name}</h1>
                <input type="text" ref={this.inputRef} />
                <Button onClick={()=>this.setState({name:this.inputRef.current.value})}> Get Input</Button>
            </div>
        )
    }
}


export default Ref;