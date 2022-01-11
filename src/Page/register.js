import { useState } from "react";

const Register=()=>
{
    const [users,setUser]=useState({
        name:"",
        lname:""
    })
    
    const HandleChange=()=>
    {
        var data=setUser({
            ...users,name:document.getElementById("name"),
            lname:document.getElementById("lname")
        })
        console.log(users)
    }

    return (<div>
        <h3>Welcome sign inTo your account</h3>
        <label for="fname">First name:</label>
        <input type="text" id="name" onChange={HandleChange}/>
        <br></br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" onChange={HandleChange}/>
        <br></br>
       
        
    </div>)
   
}

export default Register;