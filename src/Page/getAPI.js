import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const GetAPI = () => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setMail] = useState("")

    const handleClickOpen1 = () => {
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
    }, [])
    function getData() {
        fetch("http://localhost:3001/users").then((result) => {
            result.json().then((response) => {
                setData(response);
            })
        })
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
    function setUser(userid) {
        console.log("userId", userid)
        console.log(data)
        console.log(data[userid - 1])
        let item = data[userid - 1];
        setId(item.id);
        setName(item.name);
        setUserName(item.userName)
        setMail(item.email)
        setOpen(true);
    }
    function updateData() {
        let item = { id, name, userName, email }

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

    function saveUser() {
        console.log(id, name, userName, email)

        let item = { id, name, userName, email }

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
    return (
        <>
            <h2>Fetched data</h2>
            <Button variant="outlined" onClick={handleClickOpen1}>Add New User</Button>
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
                    <Button onClick={handleClose1}>Cancel</Button>
                    <Button onClick={saveUser}>Add Data</Button>
                </DialogActions>
            </Dialog>
            <table border="1">
                <tr>
                    <td>userId</td>
                    <td>Name</td>
                    <td>user Name</td>
                    <td>Email address</td>
                    <td>Action</td>
                </tr>
                {
                    data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.userName}</td>
                            <td>{item.email}</td>
                            <td> <Button variant="outlined" onClick={() => setUser(item.id)}>Edit</Button>
                                <Button variant="outlined" onClick={() => deleteUser(item.id)}>Delete</Button>
                            </td>
                        </tr>)

                }
            </table>
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
        </>
    )
}
export default GetAPI;