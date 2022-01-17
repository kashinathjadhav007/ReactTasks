import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextareaAutosize } from '@mui/base';
import { useState, useRef } from 'react';

export default function FormDialogue() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [address,setAddress] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
  };
  const handleSubmit = () => {
    setOpen(false);
    setSubmitted(true);
  };
  const handleName = (e) => {
    setName(e.target.value)
    console.log(" name is", name)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("email is", email)
    ;
  }
  const handleText =(e)=>{
    setAddress(e.target.value);
    console.log("address",address)
  }
const handleChange = (e, value) => {
    setRole(e.target.value);
  };
  
return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open Form
        </Button>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle>student details</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="Name"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email id"
              label="email id"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleEmail}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={role}
                  onChange={handleChange}
                  label="Role"
                >
                  <MenuItem value="">
                  </MenuItem>
                  <MenuItem value="Trainee">Trainee</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Expert">Expert</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Enter address"
              style={{ width: 300, height: 70, marginTop: 10 }}
              onChange ={handleText}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      {isSubmitted &&
        <div>
          <h4>name {name}</h4>
          <h4>Email {email}</h4>
          <h4>Role{role}</h4>
          <h4>address{address}</h4>
        </div>}
    </>
  )
}