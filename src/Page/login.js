import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { Input,Label } from "../component/style";
import { Box } from "@mui/material";
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
        
            <h1>Login form</h1>
            <Box sx={{
      boxShadow: 3,
      width: '15rem',
      height: '10rem',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      p: 1,
      m: 1,
      borderRadius: 2,
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: '700',
    }}>
        
           <Label>Name</Label>
             <Input type="text" id="name" onChange={HandleChange}/>  
             <Label>mail</Label>
             <Input type="email" id="email" onChange={HandleChange}  />
             <Label>Password</Label> 
             <Input type="password" id="password" onChange={HandleChange}  />  
             <br></br>
             <br></br>
             <button onClick={redirectHandler}> Submit</button>
            </Box>
        </>
    )
}
export default Login;