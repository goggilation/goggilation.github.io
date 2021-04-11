import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Card } from "./Card";
import { Link } from "react-router-dom";

const mockBlog = require('./mockPosts.json');

const Feed = (props) => {
  return (
      <Grid container direction="row" spacing={2}>
        {mockBlog.map((post, index) => {
          return (       
            <Grid item xs={12} sm={6} md={4} key={index}>     
            <Link to={'/post/' + post.slug}>
              <Card
                title={post.title}
                excerpt={post.excerpt}
                image={post.img}
              />
              </Link>
            </Grid>
          );
        })}
      </Grid>
  );
};

export default Feed;
