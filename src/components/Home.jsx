import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import img from './img/img.png';
import {  Link } from 'react-router-dom';
function Home() {
  return (
    <>
   
        <Box component="main" sx ={{p:10}}>
        <Toolbar />
          <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={2} >
              
              <Grid xs={6} textAlign={'right'}>
              <Box sx ={{mr:10,mt:25}}>
                <Typography variant='h3'> Boost Your Confidence </Typography>
              </Box>
              <Box sx ={{mr:27,}}>
                <Typography variant='h4'> Boost Your Confidence </Typography>
               
              </Box>
             
              <Button  variant="outlined" sx ={{ mt : 3, mr:61, borderRadius:50,}}> 
              <Link to="/projects">
                Start
              </Link>
              </Button>
                
              </Grid>
              
              <Grid xs={6}>
                <Box className="container">
                <Box className="wave"></Box>
                <img src={img} alt="Round Image" className="round-image" />
                

                </Box>
               
    
              </Grid>
            </Grid>
          </Box>
              
      </Box>
   
    </>
  );
}

export default Home;
