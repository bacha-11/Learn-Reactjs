import React from "react";

class ComponentDidMountExample extends React.Component{

    constructor(){
        super()
        console.log('constructor')

        // when props and state are update or delete componentDidMount() did not run 
        // but render() can run

    }

    componentDidMount(){
        console.log('component did mount')
    }

    render(){
        console.log("render")
        return(
            <h1>Component did mount</h1>
        )
    }
}

export default ComponentDidMountExample;