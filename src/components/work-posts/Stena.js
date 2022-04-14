import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backButton: {
    position: "sticky !important",
    top: 48,
  },
  helloSection: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "534px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "680px",
    },
  },
}));

const Stena = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box spacing={0}>
        <Grid container spacing={3} direction="row">
          <Grid item className={classes.backButton + " backButton"} xs={12}>
            <a onClick={() => history.goBack()}>← Back</a>
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Grid container spacing={1}>
              <Grid item>
                <h4>Stena Augmented Reality</h4>
              </Grid>
              <Grid item>
                <p className="body1">
                  I had an idea about how to create immersive experiences
                  transcending regular transportation applications using
                  augmented reality and beacon technology.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img width="100%" src="https://dl.airtable.com/.attachments/0328b079c4fc3837fc8503e1991af99b/fb579559/stena-logo.png" />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Grid container spacing={1}>
              <Grid item>
                <h5>Let innovation drive</h5>
              </Grid>
              <Grid item>
                <span className="body1">
                  This project was the child of an internal innovation process
                  where I built the business case and put together a team to
                  complete it.
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="space-around">
              <Grid item xs={6} sm={3}>
                <img width="100%" src="https://dl.airtable.com/.attachments/b259f6c23472de2050c34dfafe6870b1/f5a79959/stena-collect.png" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <img width="100%" src="https://dl.airtable.com/.attachments/3e1afde3a11ec9baa970c4a6ef761d60/e77bc464/stena-ar-mode.png" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <img width="100%" src="https://dl.airtable.com/.attachments/ae958b2d5b2adfb8de652047c51f2090/1826941c/stena-map.png" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Grid container spacing={1}>
              <Grid item>
                <h5>Unsailed ferries</h5>
              </Grid>
              <Grid item>
                <span className="body1">
                There were a bunch of hurdles to getting this project up and running. Meaning we had to let go of some ideas of complete design process. Unfortunately, this lead to a product that had great intentions, but never got to see the light of day.
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img width="100%" src="https://dl.airtable.com/.attachments/afb6f8d131d4081e88e721bf1509aa12/3702d3b3/stena-loader.gif" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Stena;
