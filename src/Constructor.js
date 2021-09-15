import React from 'react'



class Constructor extends React.Component{
    constructor(){
        super()
        this.state = {
            "name": 'abcd',
            "age":10
        }
    }

    render(){
        return(
            <div>
                <h1>Constructor Component {this.state.name} - {this.state.age}</h1>
            </div>
        )
    }
}

export default Constructor;