import React from "react";

class ComponentDidUpdateExample extends React.Component{
    constructor(){
        super()
        this.state = {
            counter:0
        }
    }

    componentDidUpdate(prvprops, prvstate, snapshot){
        console.log('componentDidUpdate', prvstate, this.state.counter)
        if(prvstate.counter == this.state.counter){
            alert("now componentDidUpdate counter and this.state.counter is same.")
        }
    }

    render(){
        console.log('render')
        return(
            <div>
                <h1>Component Did Update Example {this.state.name}</h1>
                <button onClick={()=>{this.setState({counter:1})}}>update name</button>
            </div>
        )
    }
}

export default ComponentDidUpdateExample;