import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import Card from './ui-components/Card';
import * as CONSTANTS from '../secretConfig';

const AIRTABLE_CDN = CONSTANTS.AIRTABLE_CDN_BASE_URL;

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

const Work = () => {
  const classes = useStyles();
  return (
    <>
      <Box spacing={0}>
        <Grid container spacing={3} direction="row">
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <h4>Work</h4>
              </Grid>
              <Grid item>
                <p className="body1">
                Here is a small sample of some things I’ve done. I’m very proud of everything I do but don’t have time to put them all in this little space. If you wanna find out more, please contact me and let’s chat!
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card 
              slug="library-application"
              bg={`${AIRTABLE_CDN}c1ce69d8a7220fc6d3a902545ad443df/ef9dd0b8/Biblioteket-mockups-portfolio.png`}
              scope="Mobile application"
              title="Gothenburg City Library Application"
              //excerpt="I was a part of the team that designed and developed the Gothenburg City Library App. It's primary objective was obviously to let users find and borrow books, but it also provided some neat navigational features like guided tours and Find Your Shelf."
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card 
              slug="big-sur-iconset"
              bg={`${AIRTABLE_CDN}2dc682446f2b6832e46c6b7fca4fb083/322508c8/promo.png`}
              scope="App Icon Design"
              title="Big Sur Icon Set"
              //excerpt="When Apple announced Big Sur and their new approach to the icons I've gotten really inspired. So inspired that I've started working on my own custom dock iconset."
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card 
              slug="stena-ar"
              bg={`${AIRTABLE_CDN}2eecad983c96113218a678fa18633164/0027fa3f/stena_scandinavica.jpg`}
              scope="Mobile App"
              title="Stena Augmented Reality"
              //excerpt="I had an idea about how to create immersive experiences transcending regular transportation applications using augmented reality and beacon technology."
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card 
              slug="swedish-national-radio"
              bg={`${AIRTABLE_CDN}2554b49c5e608f0c75beecb95e039ed1/d36c5851/geggan.jpg`}
              scope="Graphic design & Audio Production"
              title="Swedish National Radio"
              //excerpt="I worked as a graphic designer and digital editor at the public service institution Swedish National Radio(SR) for two years. My work here made me well versed in working towards usability in every aspect of design. I also had the great pleasure of creating, producing and hosting some of the programs that aired on radio."
              />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Work;
