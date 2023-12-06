import React from "react";
import logo from "./logo.png"
function navbar(){
    return (
        <div className="navi-bar">
            <div className="brand-name" style={{marginLeft: "auto",marginRight:"auto",display : "flex", width : "90%", flexDirection : "row",height: " 50px" }}>
                <div style={{width : "40px", height : "40px"}} ><img src= {logo} alt="no image" style={{width : "40px", height : "40px"}}></img></div>

                <div className="name" style={{marginTop : "10px", width : "80%"}}>
            <span style={{color : "red"}}>PROFIT</span>  
            <span style={{color : "green"}}>   PARTNER</span>
            </div>

            <div style={{display : "flex", flexDirection : "row", width : "100%",marginLeft:"50%"}}>
                <div style={{width : "20%",marginLeft:"60%"}}><span class="material-symbols-outlined">settings</span></div>
                <div><span class="material-symbols-outlined">notifications</span></div>
                <div><span class="material-symbols-outlined">account_circle</span></div>
            </div>
            </div>
            
            
        </div>
    )
}
export default navbar;