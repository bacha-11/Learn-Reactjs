import React from "react";


class ComponentWillUnMountExample extends React.Component{

    // componentWillUnmount is called when somethig is remove.
    componentWillUnmount(){
        alert("compontent is been removed")
        console.log("componentWillUnmount")
    }

    render(){
        return(
            <h1>Component Will UnMount Example</h1>
        )
    }
}

export default ComponentWillUnMountExample;