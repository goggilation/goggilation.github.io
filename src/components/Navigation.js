import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";
import Logo from "./Logo";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="flex-start" alignItems="center">
        <Grid container spacing={0} justify="flex-start" xs={2}>
          <Grid item>
          <Link to="/"><Logo size="small" /></Link>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="flex-end" xs={10}>
          <Grid item><Link to="/"><span class="body2">Me</span></Link></Grid>
            <Grid item><Link to="/feed"><span class="body2">Feed</span></Link></Grid>
          <Grid item><Link to="/contact"><span class="body2">Contact</span></Link></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
