import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink as Link } from "react-router-dom";
import Logo from "./Logo";
import { makeStyles } from "@material-ui/core/styles";

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
        <Grid container spacing={2} justify="flex-end" xs={10}>
          <Grid item xs={3}>
            <Link to="/" exact>
              <span className="body2">Me</span>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/feed">
              <span className="body2">Feed</span>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/contact">
              <span className="body2">Contact</span>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
