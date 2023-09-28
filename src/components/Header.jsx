import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import img from './img/ai.png';
import {  Link } from 'react-router-dom';


function Header() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:'white'}}>
      
        <Toolbar>
        <Link to="/" >
        <img src={img} alt="Round Image"  height={50}  />
        </Link>
        <Link to="/" className='startBtn'>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , color:'black' , ml:3}}
          >
          English Learning
          </Typography>
        
       </Link>
           
        </Toolbar>
      </AppBar>    
    </Box>
  );
}
export default Header
