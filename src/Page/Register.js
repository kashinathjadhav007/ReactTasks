import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



export default function Register() 
{
  const [name, setName] = React.useState('');
  const [mail,setMail]=React.useState('')
  const [password,setPassword]=React.useState('')
  const nav=useNavigate();
  const handleSubmit=(e)=>
  {
    const User={
        Name:name,
        Mail:mail,
        Password:password
    }
  let data=localStorage.getItem("register_Details");

    if(data==null)
    {
        data=[];
        data.push(User);
        localStorage.setItem("register_Details",JSON.stringify(data))
        nav('/loginPage',{state:""})
    }
    else
    {
        let Newdata=JSON.parse(data)
        Newdata.push(User)
        localStorage.setItem("register_Details",JSON.stringify(Newdata))
        nav('/loginPage',{state:""})
    }
  }
  const redirectHandler =() =>{
    nav('/loginpage',{state: {}})
  }

  // let email=document.getElementById(mail).value
  // let span=document.getElementsByTagName(span)

  // email.onkeydown=function()
  // {
  //   const regex=/^([\.\_a_zA_Z0_9]+)@([a_zA_Z]+)\.([a_zA_Z]){2,8}$/
  //   const regexO=/^([\.\_a_zA_Z0_9]+)@([a_zA_Z]+)\.([a_zA_Z]){2,3}\.[a_zA_Z]{ 1,3}$/

  //   if(regex.test(email.value) || regexO.test(email.value) )
  //   {
  //     span[0].innerText="ur email is valid"
    
  //   }
  //   else
  //   {
  //     span[0].innerText="ur email is Invalid"
  //   }
  return (
   
    <Box
    component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <h3>Register Page</h3>
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={e=>setName(e.target.value)}
     />
       <span></span>
      <br></br>
      <TextField
        value={mail}
        id='mail'
        label="Email-id"
        defaultValue=""
        onChange={e=>setMail(e.target.value)}
      />
       <span></span>
      <br></br>
      <TextField
        value={password}
        type="password"
        hidden="false"
        label="Password"
        defaultValue=""
        onChange={e=>setPassword(e.target.value)}
      />
      <span></span>
      <br></br>
      <Button onClick={handleSubmit} type="submit" variant="contained" disableElevation>
      Register
    </Button>
    <br></br>
   <h4>Or</h4>
    <Button onClick={redirectHandler} variant="contained" disableElevation>
      Login
    </Button>
    </Box>
  );
    }
  
