import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {  Link } from 'react-router-dom';

const Projects =() =>{
  return (
    <Box sx={{ flexGrow: 1 , ml:10, mt:20}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={2} sm={4} md={4}  sx={{mt:5}} >
            <Card sx={{ maxWidth: 470 }} className='Card'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-qrNAdOAJkM_LStqL2B4QVgrX0tDzff59lPeZj75YEoUt9k9kIzSIIK9Solcx5O8DUg&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" color ={'#00308F'}textAlign={'center'}>
                    Proficiency Test
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <Link to="/voice-recognition">
                Share

                </Link>
                
                  
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}  sx={{mt:5}}>
          <Card sx={{ maxWidth: 470 }} className='Card'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://c8.alamy.com/comp/2REF7CN/the-word-grammar-wooden-cubes-with-burnt-letters-study-of-grammar-of-different-languages-gray-background-top-view-2REF7CN.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" textAlign={'center'} color={'#00308F'}>
                    Grammer Correction
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <Link to="/grammer">
                Share
                </Link>
                  
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4} sx={{mt:5}} >
              <Card sx={{ maxWidth: 470 }} className='Card'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://www.betranslated.com/wp-content/uploads/2021/02/Translation-Costs.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5"  textAlign={'center'} color={'#00308F'}>
                    Translation
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                    <Link to="/translation">
                        Share
                    </Link>
                
                </Button>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
      
    </Box>
  );
}

export default Projects ;