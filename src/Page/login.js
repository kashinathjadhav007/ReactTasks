import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Form from "./form";
import { Input,Label } from "../component/style";
const Login =()=>{
const [users,setUsers] =useState(
        {
            name: "",
            email:"",
            Password:"",
        }
    )
    let navigate = useNavigate();
    const HandleChange =() =>{
      setUsers({
            ...users,
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            Password:document.getElementById("password").value,

        })
    }
    let data = users;
    const redirectHandler =() =>{
      
        navigate('/form',{state: {users}})
        
    }
    return(
        <>
          <>
            <h1>Login form</h1>
             <Label>Name</Label>
             <Input type="text" id="name" onChange={HandleChange}/>  
             <Label>mail</Label>
             <Input type="email" id="email" onChange={HandleChange}  />
             <Label>Password</Label> 
             <Input type="password" id="password" onChange={HandleChange}  />  
             <br></br>
             <button onClick={redirectHandler}> Submit</button>
         </>
        </>
    )
}
export default Login;