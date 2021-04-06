import React from "react";
import Grid from '@material-ui/core/Grid';
import config from '../config'
import Feed from './BlogFeed';

const Blog = (props) => {

  gtag('config', config.GA_MEAS_ID, {
    'page_title' : 'Blog',
    'page_path': '/Blog'});

  return (
      <Grid container spacing={2} direction="column">
        <Grid item>
          <h5>Blog</h5>
        </Grid>
        <Grid item>
            <Feed/>
        </Grid>
      </Grid>
  );
};

export default Blog;
