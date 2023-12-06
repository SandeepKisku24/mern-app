import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(){

    const [name,setName] =  useState("");
    const [email,setEmail] =  useState("");
    const [password,setpassword] =  useState();
    const [error,setError] =  useState();
    console.log(email,name,password,error);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const adduser = {name,email,password}
        const respnse  = await fetch(`${window.location.origin}`,{

            method: "POST",
            body:JSON.stringify(adduser),
            headers:{
                "Content-Type" : "application/json"
            }

        }); 
        const result = await respnse.json();
        if(!respnse.ok){
            console.log(result.error);
            setError(result.error);
        }
        else{
        console.log(result);
        setEmail("");
        setName("");
        setpassword("");
        setError("");
        }
    }
    return(
        <div className="form-reg">
            {error && <div class="alert alert-danger">
  {error}
</div>}
            <h1>
                Enter Your Details 
            </h1>
            <div>
                <ul>
                    <li>
                        <Link to = "/rest">
                            Go to restaurant
                        </Link>
                    </li>
                </ul>
            <form onSubmit={handleSubmit}>
            <div className="form-group">

            <label for="name">Name</label>
            <input type="text" className="form-control"     placeholder="Enter name"  value = {name} onChange={(e)=>{
                setName(e.target.value)
            }} />            
            </div>

            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = {email} onChange={(e)=>{
                setEmail(e.target.value)
            }}  />
            </div>

            <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value = {password} onChange={(e)=>{
                setpassword(e.target.value)
            }} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
            
        </div>
    )
}

export default Login;