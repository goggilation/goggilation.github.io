import React from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory, Link } from "react-router-dom";

const mockPosts = require("../components/mockPosts.json");

const Post = (props) => {
  const slug = props.match.params.slug;
  const post = findPostBySlug(slug);
  const history = useHistory();
  
  function handleClick() {
    history.goBack();
  }

  return (
    <Grid container spacing={4}>
      <Grid item>
        <button onClick={handleClick}>Go back</button>
      </Grid>
      <Grid item>
        <h6>{post.title}</h6>
        <h4>{post.excerpt}</h4>
      </Grid>
    </Grid>
  );
};

const findPostBySlug = (slug) => {
  return mockPosts.find((o) => o.slug === slug);
};

export default Post;
