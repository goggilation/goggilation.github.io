import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, List } from "@material-ui/core";

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
  // gtag('config', config.GA_MEAS_ID, {
  //   'page_title' : 'Start Page',
  //   'page_path': '/Start'});
  const classes = useStyles();
  return (
    <>
      <Box spacing={0}>
        <Grid container spacing={3}>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <h4>Hi! I'm Aleks 👋</h4>
              </Grid>
              <Grid item>
                <p className="body1">
                  Pleasure to see you! This is my little space, I’m inkling to
                  call it MySpace but I don’t wanna get sued! I’m currently
                  working on perfecting design systems at Volvo Group in
                  beautiful rainy Gothenburg.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h5>How I got here</h5>
              </Grid>
              <Grid item>
                <p className="body1">
                  From working at companies like Swedish National Radio and
                  Volvo, I’ve learned not only the power of diverse opinions,
                  but also the strength in being always being open to learn new
                  things. It’s what brought me from a graphic designer out of
                  school, to a shift as podcaster / part time host on radio and
                  back to UI designer and front end developer. I find my spark by taking full ownership of whatever I do, and
                  great pride in seing that thing to a a final state that
                  everyone involved is happy to use.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h5>What I'm great at</h5>
              </Grid>
              <Grid item>
                <p className="body1">
                  <ul>
                    <li style={{marginLeft: 24}}>UI Design</li>
                    <li style={{marginLeft: 24}}>Strategic work</li>
                    <li style={{marginLeft: 24}}>Figma</li>
                  </ul>
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h5>Other things I’m pretty good at</h5>
              </Grid>
              <Grid item>
                <p className="body1">
                  <ul>
                    <li style={{marginLeft: 24}}>Front end development</li>
                    <li style={{marginLeft: 24}}>Team management</li>
                  </ul>
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h5>How I look</h5>
              </Grid>
              <Grid item>
                <p className="body1">
                  Like this
                  <img width="100%" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h5>Social contacts</h5>
              </Grid>
              <Grid item>
                <p className="body1">
                See some of my design work over at <span className="dribbble">Dribbble</span>. Catch my ramblings over at <span className="twitter">Twitter</span>. Or be professional with me at <span className="linkedin">LinkedIn</span>. And of course, you can always <span className="mailLink">email me</span> 📯
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Start;
