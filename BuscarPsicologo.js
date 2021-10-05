import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Psiconoprecinho1 from "./images/Psiconoprecinho1.png";

export default function BuscarPsicologo() {


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
          console.log({
        });
      };


  return (
    <Box component="form" onSubmit={handleSubmit} 
     sx={{
         bgcolor: '#0057B7',
         width:'100%',
         height:400,
         position: 'absolute',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         }}>


        <Typography component="h1" variant="h5" sx={{color: '#ffffff', paddingTop: 15}}>
            Encontre um profissional
        </Typography>
        
        <Grid  xs={6} sx={{paddingTop:5}}>
            <TextField id="busca" label="Busque um profissional por nome ou preço." variant="filled" sx={{bgcolor:'#ffffff', width:500}}/>
        </Grid>
        
        <Grid xs={6}>
            <Button type="submit" 
                    variant="contained"
                    sx={{color: '#ffffff', width:150}}
                    >
                        Buscar


            </Button>
        </Grid>

      
    </Box>
  );
}