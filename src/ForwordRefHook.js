import React,{forwardRef} from "react"


function ForwardRefHook(props, ref){

    return(
       <div>
            <h1>ForwardREf Hook for functional components.</h1>
            <input type="text" ref={ref} /><br />
       </div>
    )

}


export default forwardRef(ForwardRefHook);