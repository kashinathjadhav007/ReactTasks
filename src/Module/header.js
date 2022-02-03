import { useState,useEffect } from "react";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {Nav,UL} from "../component/style"
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header=()=>
{
    const removeToken=()=>{
        localStorage.removeItem("token")

    }
    return(
         <div>
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
        <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}}to="/contact">Contact</Link>
        </Box>
        <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
        <Link style={{color:"white",textDecoration:"none" ,fontWeight:"bold"}}to="/">DashBoard</Link>
        </Box>
        <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
        <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="/about">About US</Link>
         </Box>
         <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
         <Link style={{color:"white",textDecoration:"none" ,fontWeight:"bold"}} to="/button">Button Varients</Link>
         </Box>
         <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
         <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="/counter">Counter</Link>
         </Box>
         <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
         <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="/login">Login</Link>
         </Box>
         <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
         <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="/autocounter">AutoCounter</Link>
         </Box>
         <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
         <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="/Muimodel">MUI Model</Link>
         </Box>
         <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
         <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="/register">MUI Login</Link>
         </Box>
         <Box sx={{ flexGrow: 0 }}m={2} pt={2}>
         <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="" onClick={removeToken}>Logout</Link>
         </Box>
        </Toolbar>
      </Container>
    </AppBar>
           </div>

    );
}
export default Header;