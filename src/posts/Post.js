import React, {dangerouslySetInnerHTML} from "react";
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
      <Grid className="single-post" item xs={12}>
        <h4 className="content-span">{post.title}</h4>
        <p className="body2 content-span">{post.excerpt}</p>
        <img src={post.img} />
        <div className="content-span" dangerouslySetInnerHTML={post.post}></div>
      </Grid>
    </Grid>
  );
};

const findPostBySlug = (slug) => {
  return mockPosts.find((o) => o.slug === slug);
};

export default Post;