import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import config from '../config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  skillHeader: {
    margin: theme.spacing(1),
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

const Start = () => {
  gtag('config', config.GA_MEAS_ID, {
    'page_title' : 'Start Page',
    'page_path': '/Start'});
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} direction="column">
        <Grid item className={classes.helloSection}>
          <h5>Hi! I'm Aleks 👋</h5>
          <p className="body1">
            I am a UI designer and hobbyist front end developer 🤓.
          </p>
          <p className="body1">
            Currently developing my fatherly skills with my kids. Otherwise I'm
            helping develop design systems at Volvo Group. Hit me up for
            anything regarding design, sneakers or video games!
          </p>
        </Grid>
      </Grid>
    </>
  );
};
export default Start;
