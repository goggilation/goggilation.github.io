import React from "react";
import Feed from './Feed';
import Grid from '@material-ui/core/Grid';
import config from '../config'

const FeedStart = (props) => {

  gtag('config', config.GA_MEAS_ID, {
    'page_title' : 'Feed',
    'page_path': '/Feed'});

  return (
      <Grid container spacing={2} direction="column">
        <Grid item>
          <h5>Feed</h5>
        </Grid>
        <Grid item>
            <Feed/>
        </Grid>
      </Grid>
  );
};

export default FeedStart;
