import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      background: {
        default: '#0057B7'
      }
    }
  }
);



export default function CadastroPsicologo() {
  
  const [estado, setEstado] = React.useState('');
  const handleChange = (event) => {
    setEstado(event.target.value);
  };
  const Input = styled('input')({
    display: 'none',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      console.log({
      nome: data.get('nome'),
      email: data.get('email'),
      password: data.get('senha'),
    });
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box component="form" onSubmit={handleSubmit}
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: '2%',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 1100,
            height:850,
            position: 'absolute', 
            left: '50%', 
            top: '40%',
            transform: 'translate(-50%, -45%)',
          }}
        >
          <Typography component="h1" variant="h5" sx={{color: '#0057B7', paddingTop:2}}>
            Cadastro
          </Typography>

          
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Adicionar Foto
            </Button>
          </label>
          

          <Grid container spacing={2} sx={{
            paddingTop: 2,
            paddingLeft: 3,
            width: 1050,
            height: 200,
          }}>
            
            
            <Grid xs={6} sx={{paddingTop: 2}}>
            <TextField id="email" label="Email" variant="outlined" sx={{width:500}} />
            </Grid>
            
            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="senha" label="Senha" variant="outlined" sx={{width:500}} />
            </Grid>

            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="nome" label="Nome" variant="outlined" sx={{width:500}} />
            </Grid>

            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="endereco" label="Endereço" variant="outlined" sx={{width:500}} />
            </Grid>
            
            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="nascimento" label="Data de Nascimento" variant="outlined" sx={{width:500}} />
            </Grid>

            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="complemento" label="Complemento" variant="outlined" sx={{width:500}} />
            </Grid>
            
            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="documento" label="CPF" variant="outlined" sx={{width:500}}/>
            </Grid>

            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="cidade" label="Cidade" variant="outlined" sx={{width:500}} />
            </Grid>
            
            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="telefone" label="Telefone" variant="outlined" sx={{width:500}} />
            </Grid>

            <Grid  xs={6} sx={{paddingTop: 2}}>
            <TextField id="cep" label="CEP" variant="outlined" sx={{width:500}} />
            </Grid>

            <Grid xs={6} sx={{paddingTop: 2}}>
             <FormControl component="fieldset">
              <FormLabel component="legend">Gênero</FormLabel>
              <RadioGroup row aria-label="genero" name="selecaogenero">
                <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
              </RadioGroup>
            </FormControl>
            </Grid> 
              
            <Grid xs={6} sx={{paddingTop: 2}}>
            <FormControl sx={{width:500}} >
                <InputLabel id="estado">Estado</InputLabel>
                <Select
                  labelId="estadolabel"
                  id="estado"
                  label="Estado"
                  value={estado}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>...</em>
                  </MenuItem>
                  <MenuItem value={"SP"}>SP</MenuItem>
                  <MenuItem value={"RJ"}>RJ</MenuItem>
                  <MenuItem value={"MG"}>MG</MenuItem>
                </Select>
                </FormControl>
            </Grid>

            <Grid xs={12} sx={{paddingTop: 2, color: '#0057B7'}}>
              <hr/>
             </Grid>

            <Grid xs={5}>
            </Grid>
            
            <Grid xs={4} sx={{color: '#0057B7'}}> 
            Informações Profissionais
            </Grid>  
           
            <Grid xs={3}>
            </Grid> 

            <Grid  xs={4} sx={{paddingTop: 2}}>
            <TextField id="crp" label="CRP" variant="outlined" sx={{width:330}}/>
            </Grid>

            <Grid  xs={4} sx={{paddingTop: 2}}>
            <TextField id="valormin" label="Valor Mínimo" variant="outlined" sx={{width:330}} />
            </Grid>

            <Grid  xs={4} sx={{paddingTop: 2}}>
            <TextField id="valormax" label="Valor Máximo" variant="outlined" sx={{width:330}}/>
            </Grid>

            <Grid  xs={12} sx={{paddingTop: 2}}>
            <TextField id="descrição" label="Escreva uma breve introdução sobre você e seu trabalho." variant="outlined" sx={{width:1015}}/>
            </Grid>

             
             <Grid xs={3}>
             </Grid>

                  <Grid xs={6} sx={{paddingTop: 5}}>
                  <Button
                      type="submit"
                      variant="contained"
                      sx={{bgcolor: '#0057B7', width:500}}
                  >
                    Entrar
                  </Button>
                  </Grid>

            <Grid xs={3}>
            </Grid>

            <Grid xs={6}>
             </Grid>

                  <Grid xs={3}>
                  <Link href="http://localhost:3000/LoginPsicologo" underline="hover">
                        {'Já possui uma conta? Entrar'}
                  </Link>
                  </Grid>
                  
            <Grid xs={3}>
            </Grid>

          </Grid>
          </Box>
      </Container>
    </ThemeProvider>
  );
}