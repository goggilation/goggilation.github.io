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

const SR = () => {
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
                <h4>Swedish National Radio</h4>
              </Grid>
              <Grid item>
                <p className="body1">
                I worked as a graphic designer and digital editor at the public service institution Swedish National Radio(SR) for two years. My work here made me well versed in working towards usability in every aspect of design. I also had the great pleasure of creating, producing and hosting some of the programs that aired on radio.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img
              width="100%"
              src={`https://dl.airtable.com/.attachments/fd212790167d2b009c3d3e6ac83b68bd/ce7f82ec/promo.jpg`}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Grid container spacing={1}>
              <Grid item>
                <h5>Giving everyone a voice</h5>
              </Grid>
              <Grid item>
                <span className="body1">
                Through my daily work at P3, with both entertainment shows like Christer & Morgan and Vardag i P3 as well as more serious work like P3 Nyheter, I got the chance to be a part of the institution that truly does its best to give everyone a voice. Here are some of the things I created while working there!
                </span>
              </Grid>
              <Grid item>
                <span className="caption">
                P.S Most of this is in swedish. Sorry for that!
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <video width="100%" height="auto" controls>
              <source src="https://dl.airtable.com/.attachments/75a6ad53020de91a0d9443237d2adfaa/19379307/climate-movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs={12}>
            <video width="100%" height="auto" controls>
              <source src="https://dl.airtable.com/.attachments/70259f9f67f11384cdafdad60ec74f10/1a045807/rbf.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs={12}>
          <img
              width="100%"
              src={`https://dl.airtable.com/.attachments/2554b49c5e608f0c75beecb95e039ed1/d36c5851/geggan.jpg`}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Grid container spacing={1}>
              <Grid item>
                <h5>Sending it forward</h5>
              </Grid>
              <Grid item>
                <span className="body1">
                One of my most proud working experiences not just at P3, but at all, is the work I got to do with Musikhjälpen. Being just a minor piece in the mega puzzle that creates a week of joy really is bar none when it comes to fulfilling work duties. Below are some of my, very minor, contributions to that cause.
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <video width="100%" height="auto" controls>
              <source src="https://dl.airtable.com/.attachments/c95834d2c772dbf52afaa4b3ac53e01e/1dcdef49/mannequin.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs={12}>
            <video width="100%" height="auto" controls>
              <source src="https://dl.airtable.com/.attachments/cf17ae57ab176fdcaa7bfc092105186b/826e5c45/marriage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs={12}>
            <video width="100%" height="auto" controls>
              <source src="https://dl.airtable.com/.attachments/cd5a07c6ddbf24f10064edf475a09dd1/f663b0d9/johanfalk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs={12}>
          <img
              width="100%"
              src="https://dl.airtable.com/.attachments/517863f8daa45bb9b108f1925d4615fd/6c301a9c/keep-fighting.JPG"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default SR;
