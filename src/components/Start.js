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
                <h4>I’m Aleks 🙂 I design!</h4>
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
                    <li style={{marginLeft: 16}}>UI Design</li>
                    <li style={{marginLeft: 16}}>Strategic work</li>
                    <li style={{marginLeft: 16}}>Figma</li>
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
                    <li style={{marginLeft: 16}}>Front end development</li>
                    <li style={{marginLeft: 16}}>Team management</li>
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <h5>How I look</h5>
              </Grid>
              <Grid item xs={12}>
                <p className="body1">
                  Like this
                  <img width="100%" src="../src/images/me_water.png"/>
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
                See some of my design work over at <span className="dribbble"><a href="https://dribbble.com/goggilation">Dribbble</a></span>. Catch my ramblings at <span className="twitter"><a href="https://twitter.com/goggilation">Twitter</a></span>. Or be professional with me at <span className="linkedin"><a href="https://www.linkedin.com/in/aleksander-djordjevic-b8219384/">LinkedIn</a></span>. And of course, you can always <span className="mailLink"><a href="mailto:&#097;&#108;&#101;&#107;&#115;&#097;&#110;&#100;&#101;&#114;&#046;&#107;&#046;&#100;&#106;&#111;&#114;&#100;&#106;&#101;&#118;&#105;&#099;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">email me</a></span> 📯
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
