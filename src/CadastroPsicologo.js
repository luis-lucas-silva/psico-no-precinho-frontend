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
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#FFFFFF' }}>
          </Avatar>
          <Typography component="h1" variant="h5" sx={{color: '#0057B7'}}>
            Cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{width:350, mt: 3 }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <TextField
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
                <TextField
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
                <TextField
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,  bgcolor: '#0057B7'}}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/LoginPsicologo" variant="body2" sx={{color: '#0057B7'}}>
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