import { useState,useEffect } from "react";
import * as React from 'react';
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();
const Header=()=>
{
    const [value, setValue] = React.useState(null);
    

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
         <Link style={{color:"white",textDecoration:"none",fontWeight:"bold"}} to="/loginpage" onClick={removeToken}>Logout</Link>
         </Box>
         <Box>
         <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={data}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="search Name" />
      )}
    />
         </Box>
        </Toolbar>
      </Container>
    </AppBar>
           </div>

    );
}

const data = [
    { name:"kashi" },
    { name:"jadhav" },
    { name:"jadhav" },
    { name:"jadhav" },
    { name:"jadhav" }
  ];
  
export default Header;