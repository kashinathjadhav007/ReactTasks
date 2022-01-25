import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() 
{
 const [users,setUsers] =useState(
    {
        mail:"",
        Password:"",
    }
)
const HandleChange =(e) =>{
      setUsers({
            ...users,
            mail:e.target.value
        })
    }
  let navigate = useNavigate();
  const redirectHandler =() =>{
    const token=localStorage.setItem("token","userdata");
    navigate('/welcome',{state: {users}})
}
const redirectHandler1 =() =>{
  navigate('/register',{state: {}})
}
  
  return (
    <Box
    component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <h1>login page</h1>
    <br></br>
    <h3>Sign into your account</h3>
    <br></br>
      <TextField
      onChange={HandleChange}
        id="mail"
        label="Email-id"
        defaultValue=""
      />
      <br></br>
      <TextField 
        id="password"
        label="Password"
        type="password"
        hidden="false"
        defaultValue=""
      />
      <br></br>
      <Button onClick={redirectHandler} variant="contained" disableElevation>
      Submit
    </Button>
    <br></br>
   <h4>Or</h4>
    <Button onClick={redirectHandler1} variant="contained" disableElevation>
      Register
    </Button>
    </Box>
  );
}
