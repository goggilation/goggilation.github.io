import React from "react";
import items from "../content/feedContent.json";
import FeedCard from "./FeedCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Feed = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container className={classes.root} spacing={isMobile ? 4 : 6}>
      {items.FeedItems.map((item, index) => {
        return (
          <FeedCard
            key={index}
            img={item.img}
            projectName={item.projectName}
            clientName={item.clientName}
            description={item.description}
            ctaText={item.ctaText}
          />
        );
      })}
    </Grid>
  );
};

export default Feed;
