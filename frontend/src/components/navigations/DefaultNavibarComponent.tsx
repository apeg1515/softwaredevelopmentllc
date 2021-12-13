import React from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Logo from "../../images/logo_icon_main.png";

const useStyles = makeStyles((theme: Theme) => createStyles(({
    root: {
        flexGrow: 1,
        right: 0,
        top: 0,
        position: "absolute",
        width: "100%",
    },
    appBar: {
        boxShadow: "none !important",
        borderStyle: "solid",
        borderColor: "#EAEEF3",
        borderWidth: 0,
        borderBottomWidth: "thin",
        backgroundColor: "#fff",
        color: "black",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        maxWidth: 120,
        paddingLeft: 3
    },
    boxLeft: {
        display: "flex",
        justifyContent: "flex-start",
    },
    boxMiddle: {
        display: "flex",
        justifyContent: "flex-start",
    },
    boxRight: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%"
    },
})));

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="absolute">
        <Toolbar>
          <Box className={classes.boxLeft}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </Box>
          <Box className={classes.boxMiddle}>
            <Button color="inherit">
                <Link to="/register">Register</Link>
            </Button>
             <Button color="inherit">
                <Link to="/about">About</Link>
            </Button>
          </Box>
          <Box className={classes.boxRight}>
            <Button color="primary">
                <Link to="/login">Login</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}


