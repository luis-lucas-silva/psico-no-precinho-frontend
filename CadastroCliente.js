import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
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
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

const theme = createTheme(
  {
    palette: {
      background: {
        default: '#0057B7'
      }
    }
  }
);

export function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
}

export default function CadastroCliente() {
  
  const [estado, setEstado] = React.useState('');
  const handleChange = (event) => {
    setEstado(event.target.value);
  };
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
      <CssBaseline />

      <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
      >
      </AppBar>

      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" sx={{color: '#0057B7'}}>
            Cadastro
          </Typography>
          <Grid container spacing={3}>
            
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="E-mail"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="Senha"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="nome"
                name="nome"
                label="Nome Completo"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="address"
                name="address"
                label="Endereço"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="birthdayDate"
                name="birthdayDate"
                label="Data de Nascimento"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="complemento"
                name="complemento"
                label="Complemento"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="document"
                name="document"
                label="Documento"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="cidade"
                name="cidade"
                label="Cidade"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="telefone"
                name="telefone"
                label="Telefone"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="cep"
                name="cep"
                label="CEP"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gênero</FormLabel>
                <RadioGroup row aria-label="genero" name="selecaogenero">
                  <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                  <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
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
                  <MenuItem value={"AC"}>AC</MenuItem>
                  <MenuItem value={"AL"}>AL</MenuItem>
                  <MenuItem value={"AM"}>AM</MenuItem>
                  <MenuItem value={"AP"}>AP</MenuItem>
                  <MenuItem value={"BA"}>BA</MenuItem>
                  <MenuItem value={"CE"}>CE</MenuItem>
                  <MenuItem value={"DF"}>DF</MenuItem>
                  <MenuItem value={"ES"}>ES</MenuItem>
                  <MenuItem value={"GO"}>GO</MenuItem>
                  <MenuItem value={"MA"}>MA</MenuItem>
                  <MenuItem value={"MG"}>MG</MenuItem>
                  <MenuItem value={"MS"}>MS</MenuItem>
                  <MenuItem value={"MT"}>MT</MenuItem>
                  <MenuItem value={"PA"}>PA</MenuItem>
                  <MenuItem value={"PB"}>PB</MenuItem>
                  <MenuItem value={"PE"}>PE</MenuItem>
                  <MenuItem value={"PI"}>PI</MenuItem>
                  <MenuItem value={"PR"}>PR</MenuItem>
                  <MenuItem value={"RJ"}>RJ</MenuItem>
                  <MenuItem value={"RN"}>RN</MenuItem>
                  <MenuItem value={"RO"}>RO</MenuItem>
                  <MenuItem value={"RR"}>RR</MenuItem>
                  <MenuItem value={"RS"}>RS</MenuItem>
                  <MenuItem value={"SC"}>SC</MenuItem>
                  <MenuItem value={"SE"}>SE</MenuItem>
                  <MenuItem value={"SP"}>SP</MenuItem>
                  <MenuItem value={"TO"}>TO</MenuItem>
                </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
              >
                Cadastrar
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="http://localhost:3000/LoginCliente" underline="hover">
                {'Já possui uma conta? Entrar'}
              </Link>
            </Grid>

          </Grid>
        </Paper>
      </Container>

    </ThemeProvider>
  );
}