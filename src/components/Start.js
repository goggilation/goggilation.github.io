import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import config from "../config";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textSection: {
    maxWidth: "560px",
  },
}));

const mockPosts = require("./mockPosts.json");
const mockWork = require("./mockWork.json");

const Start = () => {
  gtag("config", config.GA_MEAS_ID, {
    page_title: "Start Page",
    page_path: "/Start",
  });
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} direction="column">
        <Grid item className={classes.textSection}>
          <h4>Hi! I'm Aleks 👋 I design!</h4>
          <p className="body1">
            I’m currently developing design systems at Volvo Group, but I’ve
            worked with design for companies like CGI and Swedish National Radio
            for more than 6 years.
          </p>
        </Grid>
        <Grid item className={classes.textSection}>
          <h5>Social Contact</h5>
          <p className="body1">
            See some of my design work over at{" "}
            <a href="https://dribbble.com/goggilation" className="dribble">
              Dribbble
            </a>
            . Catch my ramblings over at{" "}
            <a href="https://twitter.com/goggilation" className="twitter">
              Twitter
            </a>
            . Or be professional with me on{" "}
            <a
              href="https://www.linkedin.com/in/aleksander-djordjevic-b8219384/"
              className="linkedin"
            >
              LinkedIn
            </a>
          </p>
        </Grid>

        <Grid item>
          <h5>Featured Work</h5>
          <Grid className="featured-work" container spacing={1}>
            {mockWork.map((work, index) => {
              if (work.featured) {
                return (
                  <Grid item xs={12} sm={6} lg={4} key={index}>
                    <Link to={"/work/" + work.slug}>
                      <div
                        className="work-post"
                        style={{background: `url(${work.thumbnail})`}}
                      >
                        <h4>{work.title}</h4>
                      </div>
                    </Link>
                  </Grid>
                );
              }
              return;
            })}
          </Grid>
        </Grid>
        <Grid item>
          <h5>Blog Articles</h5>
          <Grid container spacing={1}>
            {mockPosts.map((post, index) => {
              if (post.featured) {
                return (
                  <Grid item xs={12} key={index}>
                    <Link to={"/post/" + post.slug}>{post.title}</Link>
                  </Grid>
                );
              }
              return;
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Start;
