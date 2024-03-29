import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink as Link } from "react-router-dom";
import Logo from "./Logo";
import { makeStyles } from "@material-ui/core/styles";
import { SvgIcon, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { getTheme } from "./theme";
import { dark } from "@material-ui/core/styles/createPalette";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

const Navigation = (props) => {

  const currentTheme = getTheme()[0];
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", getTheme()[0]);
  }
  const path = currentTheme === 'dark' ? "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" : "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z";
  const [darkMode, setDarkmode] = getTheme();

  function switchTheme() {
    setOpen(true);
    if(darkMode === 'dark')
      {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        console.log(localStorage.theme);
        setDarkmode('light');
    }else{
      document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        console.log(localStorage.theme);
        setDarkmode('dark');
    }
  }

  const classes = useStyles();
  return (
    <div className={"navigation " + classes.root}>
      <Snackbar open={open} autoHideDuration={4000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} message={`Set theme to ${currentTheme}`} onClose={handleClose} action={
          <React.Fragment>
            <IconButton size="small" onClick={handleClose}>
              <CloseIcon/>
            </IconButton>
          </React.Fragment>
        }/>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={1}>
          <Link to="/" exact>
            <Logo size="small" />
          </Link>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container spacing={4} justifyContent="flex-end">
            <Grid item>
              <a onClick={() => switchTheme()}><SvgIcon><path d={path}/></SvgIcon></a>
            </Grid>
            <Grid item>
              <Link to="/" exact className="body1">
                Me
              </Link>
            </Grid>
            <Grid item>
              <Link to="/work" exact className="body1">
                Work
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
