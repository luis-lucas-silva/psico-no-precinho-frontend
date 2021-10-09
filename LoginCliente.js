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
import { NoEncryption } from '@material-ui/icons';
import { borderRadius } from '@mui/system';

const theme = createTheme(
  {
    palette: {
      background: {
        default: '#0057B7'
      }
    }
  }
);

export default function LoginCliente() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('Email'),
      senha: data.get('Senha'),
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
          <Avatar sx={{ m: 1, bgcolor: '#FFFFFF'}}>
          </Avatar>
          <Typography component="h1" variant="h5" sx={{color: '#0057B7'}}>
            Entrar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width:350, mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="senha"
              id="senha"
              autoComplete="current-senha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#0057B7'  }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
               </Grid>
              <Grid item>
                <Link href="http://localhost:3000/CadastroCliente" variant="body2" sx={{color: '#0057B7'}}>
                  {"Não possui uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
    </ThemeProvider>
  );
}
