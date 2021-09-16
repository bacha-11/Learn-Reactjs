import {Button} from 'react-bootstrap'

// Lifting State Up mean -> transfor data from child to parant
function LIftingStateUp(props){

    const name = 'abc'

     return(
         <div>
             <h1>Lifting State Up mean  transfor data from child to parant</h1>
             <Button className="success" onClick={()=>props.data(name)}> Transfor Data</Button>
         </div>
     )
}

export default LIftingStateUp;