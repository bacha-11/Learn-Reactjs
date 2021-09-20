import { useEffect, useRef } from "react";


function GetPreviousProps(props){

    let PrevProps = useRef();
    let getPrevProps = PrevProps.current

    useEffect(()=>{
        PrevProps.current = props.count;
    })

    // let getPrevProps = PrevProps.current

    return(
        <div>
            <h2>Previous Props : {getPrevProps} </h2>
        </div>
    )
}


export default GetPreviousProps;