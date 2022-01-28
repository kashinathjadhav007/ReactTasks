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
  const[nameError,setNameError]=React.useState(false)
  const[mailError,setmailError]=React.useState(false)
  const[passwordError,setPasswordError]=React.useState(false)
  
  const nav=useNavigate();
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    const User={
        Name:name,
        Mail:mail,
        Password:password
    }

    let nameRegEx=/^[A-Za-z]+$/
    let nameCheck=nameRegEx.test(User.Name)
    let emailRegEx=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    let mailCheck=emailRegEx.test(User.Mail)
    let passwordRegEx=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    let passwordCheck=passwordRegEx.test(User.Password)

    if(!nameCheck)
    {
      setNameError(true)
    }
    if(!mailCheck)
    {
     setmailError(true)
    }
    if(!passwordCheck)
    {
      setPasswordError(true)
    }
  let data=localStorage.getItem("register_Details");

    if(data==null)
    {
        data=[];
        data.push(User);
        localStorage.setItem("register_Details",JSON.stringify(data))
        if(mailCheck==true && nameCheck==true && passwordCheck==true)
        {
          nav('/loginPage',{state:""})
        }
        else
        {
          console.log("wrong email")
        }

    }
    else
    {
        let Newdata=JSON.parse(data)
        Newdata.push(User)
        localStorage.setItem("register_Details",JSON.stringify(Newdata))

        if(mailCheck==true && nameCheck==true && passwordCheck==true)
        {
          nav('/loginPage',{state:""})
        }
        else
        {
          console.log("wrong email")
        }
       
    }
  }
  const redirectHandler =() =>{
    nav('/loginpage',{state: {}})
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
    <h3>Register Page</h3>
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={e=>setName(e.target.value)}
        />
        {nameError && <p>name error</p>}
      <br></br>
     <TextField
        value={mail}
        id='email'
        label="Email-id"
        defaultValue=""
        onChange={e=>setMail(e.target.value)}
      />
      {mailError && <p>Wrong mail</p>}
      <br></br>
      <TextField
        value={password}
        type="password"
        hidden="false"
        label="Password"
        defaultValue=""
        onChange={e=>setPassword(e.target.value)}
      />
      {passwordError && <p>wrong password</p>}
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