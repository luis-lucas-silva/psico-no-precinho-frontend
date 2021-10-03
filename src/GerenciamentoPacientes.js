import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextareaAutosize } from "@material-ui/core";
import Psiconoprecinho1 from "./images/Psiconoprecinho1.png";

const theme = createTheme =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    
  })
;

export default function GerenciamentoPacientes() {
  

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{bgcolor: "#0057B7"}}>
    
          <img src={Psiconoprecinho1} alt="logo" width="400" height="300" />
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}