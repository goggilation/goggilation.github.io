import React from "react";
import Feed from './Feed';
import Grid from '@material-ui/core/Grid';

const FeedStart = (props) => {

  gtag('set', 'page', '/Feed');
  gtag('send', 'pageview');

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
