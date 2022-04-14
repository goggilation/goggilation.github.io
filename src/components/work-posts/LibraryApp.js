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

const LibraryApp = () => {
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
                <h4>Gothenburg City Library Application</h4>
              </Grid>
              <Grid item>
                <p className="body1">
                  I was a part of the team that designed and developed the Gothenburg City Library App. Its primary objective was obvious to let users find and borrow books, but it also provided some neat navigational features like guided tours and Find Your Shelf.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img
              width="100%"
              src={`${AIRTABLE_CDN}805a57753b08afed1991b5aff5a6e48c/6a714a80/find-at-lib.png`}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Grid container spacing={1}>
              <Grid item>
                <h5>Find your book</h5>
              </Grid>
              <Grid item>
                <span className="body1">
                  Finding a way that was easy for people of all walks of life,
                  to easily find, borrow and manage their library loans.
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img width="100%" src={`${AIRTABLE_CDN}6dccdf7885d274a8c977c111dc7c18ed/ed9c748d/search-borrow.jpeg`} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img width="100%" src={`${AIRTABLE_CDN}a7d9e23c11577f5ebd29bbdb9b577085/0ba6d237/my-loans.jpeg`} />
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Grid container spacing={1}>
              <Grid item>
                <h5>Find your way</h5>
              </Grid>
              <Grid item>
                <span className="body1">
                  The navigational features of the application were developed
                  with, at the time 😉, state of the art technology.
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img width="100%" src={`${AIRTABLE_CDN}8d13d216773605f94fe495fda9c0fd43/334b0d2d/find-shelf.jpeg`} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img width="100%" src={`${AIRTABLE_CDN}f8c83277356f9cd272af09bd1e77d166/fafa61a6/guided-tour.jpeg`} />
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <span className="body1">
            Using Bluetooth beacons, we were able to provide functionality like guided tours through the library, and the ability to find your desired book shelf in the 3 story library!
            </span>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default LibraryApp;
