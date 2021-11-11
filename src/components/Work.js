import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import Card from './ui-components/Card';

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
  // gtag('config', config.GA_MEAS_ID, {
  //   'page_title' : 'Start Page',
  //   'page_path': '/Start'});
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
              bg="https://dl.airtable.com/.attachments/c1ce69d8a7220fc6d3a902545ad443df/ef9dd0b8/Biblioteket-mockups-portfolio.png"
              scope="Mobile application"
              title="Gothenburg City Library Application"
              excerpt="I was a part of the team that designed and developed the Gothenburg City Library App. It's primary objective was obviously to let users find and borrow books, but it also provided some neat navigational features like guided tours and Find Your Shelf."/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card 
              slug="musikhjalpen-serious-request"
              bg="https://dl.airtable.com/.attachments/e1b8fa21e5670d4be3915688e8c2da86/290f1838/IMG_9864.JPG"
              scope="Social Work"
              title="Digital Editor @ Musikhjälpen"
              excerpt="I worked as a digital editor and graphic designer for the annual fundraiser Musikhjälpen, internationally known as “Serious Request”. I'm really proud of this work is one of my proudest as it is one of the few times when you really get to see the truth to the cliché that there is good in all of us."/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card 
              slug="big-sur-iconset"
              bg="https://dl.airtable.com/.attachments/832480988ae7f0fb892c110db7763ebe/46957a9e/bigsur.png"
              scope="App Icon Design"
              title="Big Sur Iconset"
              excerpt="When Apple announced Big Sur and their new approach to the icons I've gotten really inspired. So inspired that I've started working on my own custom dock iconset."/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Work;
