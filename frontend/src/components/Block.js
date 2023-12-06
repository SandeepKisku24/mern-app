import React from "react";

function block(props){
    return(
        <div className={props.cName}>
            <div className="heading-for-box">{props.head}</div>
            <div className="content-of-box"> <p>{props.value}  &nbsp; {props.unit}</p></div>
            
        </div>
    )
}

export default block;