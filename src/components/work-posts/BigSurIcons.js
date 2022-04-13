import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import * as CONSTANTS from '../../config';

const AIRTABLE_CDN = CONSTANTS.AIRTABLE_CDN_BASE_URL;

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

const BigSurIcons = () => {
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
                <h4>Big Sur Iconset</h4>
              </Grid>
              <Grid item>
                <p className="body1">
                When Apple announced Big Sur and their new approach to the icons I've gotten really inspired. So inspired that I've started working on my own custom dock iconset.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img
              width="100%"
              src={`${AIRTABLE_CDN}2dc682446f2b6832e46c6b7fca4fb083/322508c8/promo.png`}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Grid container spacing={1}>
              <Grid item>
                <h5>Rethinking the basics</h5>
              </Grid>
              <Grid item>
                <span className="body1">
                What I enjoyed about diving into this was the idea of trying to rething some of the basics. Not going to crazy with the icons, and still making them feel relevant and new.
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img
              width="100%"
              src={`${AIRTABLE_CDN}02c8f74272f68db44d06c294222c8597/0d58ab42/finder.png`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <img
              width="100%"
              src={`${AIRTABLE_CDN}13f51f08d1a7c7eb0c869a519bf365f0/7e012a10/agenda.png`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <img
              width="100%"
              src={`${AIRTABLE_CDN}8b618d46c90a82bac1441f189f481746/58f8e4bd/apple-music.png`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <img
              width="100%"
              src={`${AIRTABLE_CDN}4874687ca301e37adc53e30b80f260d9/6dcdd80d/xcode.png`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <img
              width="100%"
              src={`${AIRTABLE_CDN}06455ce934dbc921a10621fad6a39c46/a9ca2436/mail.png`}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default BigSurIcons;