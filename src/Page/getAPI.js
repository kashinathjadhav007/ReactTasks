import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const GetAPI = () => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setMail] = useState("")
    const idRegEx = /^[0-9]/
    let nameRegEx=/^[A-Za-z]+$/
    let emailRegEx=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/

    const handleClickOpen1 = (e) => {
        setOpen1(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    useEffect(() => {
        getData();
    },[])
    function getData() {
        fetch("http://localhost:3001/users").then((result) => {
            result.json().then((response) => {
                setData(response);
            })
        })
    }
    function setUser(userid) {

        let item = data[userid - 1];
        setId(item.id);
        setName(item.name);
        setUserName(item.userName)
        setMail(item.email)
        setOpen(true);
    }

    function updateData() {
        let item = { id, name, userName, email }
        let nameCheck=nameRegEx.test(item.name)
        let mailCheck=emailRegEx.test(item.email)
        const Checkid = idRegEx.test(item.id)
        if(Checkid==true && nameCheck==true && mailCheck==true)
        {
        fetch(`http://localhost:3001/users/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)

            }).then((result) => {
                result.json().then((response) => {
                    getData();
                })
            })
        setOpen(false);
        }
        
    }

    function saveUser() {
        let item = { id, name, userName, email }
        const Checkid = idRegEx.test(item.id)
        let nameCheck=nameRegEx.test(item.name)
        let mailCheck=emailRegEx.test(item.email)

        
        if (Checkid == true && mailCheck==true && nameCheck==true) {
            fetch(`http://localhost:3001/users`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)

                }).then((result) => {
                    result.json().then((response) => {
                        getData();
                    })
                })
                setOpen1(false);
        }
    }

    function deleteUser(id) {
        console.log(id)
        fetch(`http://localhost:3001/users/${id}`,
            {
                method: 'DELETE'
            }).then((result) => {
                result.json().then((response) => {
                    getData();
                })
            })

    }
    return (
        <>
            <h2>Fetched data</h2>
            <Button variant="outlined" onClick={handleClickOpen1}>Add New User</Button>
            <br></br>
            <Dialog open={open1} onClose={handleClose1}>
                <DialogTitle>Add new user</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        label="UserId"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setId(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="userName"
                        label="Username"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="mail"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setMail(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose1}>Cancel</Button>
                    <Button onClick={saveUser}>Add Data</Button>
                </DialogActions>
            </Dialog>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit the Data</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="id"
                            label="UserId"
                            fullWidth
                            variant="standard"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            variant="standard"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userName"
                            label="Username"
                            fullWidth
                            variant="standard"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="mail"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={updateData}>Update</Button>
                    </DialogActions>
                </Dialog>
            </div>

            <br></br>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell >Userid</StyledTableCell>
            <StyledTableCell >User Email</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell>{item.id}</StyledTableCell>
              <StyledTableCell >{item.name}</StyledTableCell>
              <StyledTableCell >{item.userName}</StyledTableCell>
              <StyledTableCell >{item.email}</StyledTableCell>
              <StyledTableCell >
              <Button variant="outlined" onClick={() => setUser(item.id)}>Edit</Button>
              <Button variant="outlined" onClick={() => deleteUser(item.id)}>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default GetAPI;