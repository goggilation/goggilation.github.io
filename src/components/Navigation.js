import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink as Link } from "react-router-dom";
import Logo from "./Logo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
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
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={1}>
          <Link to="/" exact>
            <Logo size="small" />
          </Link>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container spacing={4} justify="flex-end">
            <Grid item>
              <Link to="/" exact className="body2">
                Me
              </Link>
            </Grid>
            <Grid item>
              <Link to="/feed" className="body2">
                Feed
              </Link>
            </Grid>
            <Grid item>
              <Link to="/contact" className="body2">
                Contact
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
