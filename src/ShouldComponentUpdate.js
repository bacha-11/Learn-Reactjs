import React from "react";


class ShouldComponentUpdateExample extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate', this.state.count)
        if(this.state.count < 10){
            return true
        }
    }

    render(){
        return(
            <div>
                <h1>ShouldComponentUpdateExample {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update count</button>
            </div>
        )
    }
}


export default ShouldComponentUpdateExample;