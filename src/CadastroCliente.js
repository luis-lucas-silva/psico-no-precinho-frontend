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

const theme = createTheme(
  {
    palette: {
      background: {
        default: '#0057B7'
      }
    }
  }
);

export default function CadastroCliente() {
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
        <Box
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: '2%',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 800,
            height:700,
            position: 'absolute', 
            left: '50%', 
            top: '45%',
            transform: 'translate(-50%, -45%)',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#FFFFFF' }}>
          </Avatar>
          <Typography component="h1" variant="h5" sx={{color: '#0057B7'}}>
            Cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{width:350, mt: 3 }}>
          <Grid container spacing={0}>
              
              <Grid item xs={12} >
                <TextField sx={{right: 190}}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField sx={{right: 190}}
                  margin="normal"
                  autoComplete="nome"
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField sx={{right: 190}}
                  margin="normal"
                  required
                  fullWidth
                  name="nascimento"
                  label="Nascimento"
                  type="nascimento"
                  id="nascimento"
                  autoComplete="nascimento"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField sx={{right: 190}}
                  margin="normal"
                  required
                  fullWidth
                  name="documento"
                  label="Documento"
                  type="documento"
                  id="documento"
                  autoComplete="documento"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField sx={{right: 190}}
                  margin="normal"
                  required
                  fullWidth
                  name="telefone"
                  label="Telefone"
                  type="telefone"
                  id="telefone"
                  autoComplete="telefone"
                />
              </Grid>

              <FormControl component="fieldset" sx={{right: 180, top:15}}>
              <FormLabel component="legend">Gênero</FormLabel>
              <RadioGroup row aria-label="genero" name="row-radio-buttons-group">
                  <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                  <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
              </RadioGroup>
              </FormControl>
              
              <Grid item xs={12} >
                <TextField sx={{left: 190, bottom: 466}}
                  margin="normal"
                  required
                  fullWidth
                  name="senha"
                  label="Senha"
                  type="senha"
                  id="senha"
                  autoComplete="senha"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField sx={{left: 190, bottom: 466}}
                  margin="normal"
                  required
                  fullWidth
                  name="endereco"
                  label="Endereço"
                  type="endereco"
                  id="endereco"
                  autoComplete="endereco"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField sx={{left: 190, bottom: 466}}
                  margin="normal"
                  required
                  fullWidth
                  name="complemento"
                  label="Complemento"
                  type="complemento"
                  id="complemento"
                  autoComplete="complemento"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField sx={{left: 190, bottom: 466}}
                  margin="normal"
                  required
                  fullWidth
                  name="cidade"
                  label="Cidade"
                  type="cidade"
                  id="cidade"
                  autoComplete="cidade"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField sx={{left: 190, bottom: 466}}
                  margin="normal"
                  required
                  fullWidth
                  name="cep"
                  label="CEP"
                  type="cep"
                  id="cep"
                  autoComplete="cep"
                />
              </Grid>    
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ bottom: 360, mt:1, mb: 2,  bgcolor: '#0057B7'}}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/LoginCliente" variant="body2" sx={{color: '#0057B7'}}>
                  Já possui uma conta? Entrar
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}