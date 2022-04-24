import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";

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


// https://dl.airtable.com/.attachments/b00972b237d7ac7faf1c4614147e3c8b/c6d3e966/me_water.png

const meImg = "https://dl.airtable.com/.attachments/3c1d17c163b446360b6b34df6eca57c5/079b4d28/me-woods.jpg";

const Start = () => {
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
                  but also the strength in always being open to learn new
                  things. It’s what brought me from a graphic designer out of
                  school, to a podcaster / part time host on radio and back to UI designer and front end developer. I find my spark by taking full ownership of whatever I do, and
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
                    <li style={{marginLeft: 16}}>Design systems</li>
                    <li style={{marginLeft: 16}}>UI Design</li>
                    <li style={{marginLeft: 16}}>Strategic work</li>
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
                    <li style={{marginLeft: 16}}>Public speaking</li>
                    <li style={{marginLeft: 16}}>Teambuilding</li>
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
                  Like this</p>
              </Grid>
              <Grid item xs={12}>
                  <div width="100%" style={{
                    height: '566px',
                    backgroundPosition: 'center',
                    background: `url(${meImg})`,
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center',
                    backgroundSize: 'cover',
                  }} src={meImg}/>
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
