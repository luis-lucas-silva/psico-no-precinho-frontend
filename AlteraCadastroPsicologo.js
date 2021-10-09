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
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const theme = createTheme(
  {
    palette: {
      background: {
        default: '#0057B7'
      }
    }
  }
);

///////

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

///////

export function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
}

export default function CadastroCliente() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Alterar Dados</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  
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

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Psico no Precinho
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
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
        <Paper variant="outlined" sx={{borderRadius: '2%', my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" sx={{color: '#0057B7'}}>
            Altera Cadastro
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
                label="CPF"
                disabled
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

            <Grid item xs={12} sm={12}>
              <hr/>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Typography component="h6" align="center" sx={{color: '#0057B7'}}>
                Informações Profissionais
              </Typography>
            </Grid>

            <Grid  item xs={12} sm={4}>
              <TextField
                required
                id="crp"
                name="crp"
                label="CRP"
                disabled
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid  item xs={12} sm={4}>
              <TextField
                required
                id="minValue"
                name="minValue"
                label="Valor Mínimo"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid  item xs={12} sm={4}>
              <TextField
                required
                id="maxValue"
                name="maxValue"
                label="Valor Máximo"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Escreva uma breve introdução sobre você e seu trabalho."
                multiline
                maxRows={4}
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                href="http://localhost:3000/BuscarPsicologo"
              >
                Voltar
              </Button>
              <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
              >
                Salvar
              </Button>
            </Grid>

          </Grid>
        </Paper>
      </Container>

    </ThemeProvider>
  );
}