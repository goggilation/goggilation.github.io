import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import config from '../config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textSection: {
      maxWidth: "560px",
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
        <Grid item className={classes.textSection}>
          <h4>Hi! I'm Aleks 👋 I design!</h4>
          <p className="body1">
          I’m currently developing design systems at Volvo Group, but I’ve worked with design in companies like CGI and Swedish National Radio for more than 6 years. 
          </p>
        </Grid>
        <Grid item className={classes.textSection}>
          <h5>Social Contact</h5>
          <p className="body1">See some of my design work over at <a href="https://dribbble.com/goggilation" className="dribble">Dribbble</a>. Catch my ramblings over at <a href="https://twitter.com/goggilation" className="twitter">Twitter</a>. Or be professional with me on <a href="https://www.linkedin.com/in/aleksander-djordjevic-b8219384/" className="linkedin">LinkedIn</a></p>
        </Grid>

        <Grid item>
          <h5>Featured Work</h5>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <img style={{width: '100%'}} src="https://via.placeholder.com/300"/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img style={{width: '100%'}} src="https://via.placeholder.com/300"/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img style={{width: '100%'}} src="https://via.placeholder.com/300"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <h5>Blog Articles</h5>
          <Grid container spacing={1}>
            <Grid item xs={12}><a href="#">How to build a design system in Figma</a></Grid>
            <Grid item xs={12}><a href="#">Reimagining UI work</a></Grid>
            <Grid item xs={12}><a href="#">The story of Kingbolt, the Volvo Design System</a></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Start;
