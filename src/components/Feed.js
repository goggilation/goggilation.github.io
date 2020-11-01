import React, { useState, useEffect } from "react";
import CTATEXT from "../content/feedContent.json";
import FeedCard from "./FeedCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import { useMediaQuery } from "@material-ui/core";
import config from "../config";

let itemsList = [];

var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: config.AIRTABLE_KEY,
});
var base = Airtable.base(config.AIRTABLE_ID);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  skeleton:{
    backgroundColor: "rgba(255, 255, 255, 0.11)",
  },
  skeletonImage:{
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  skeletonText:{
    marginTop: -16
  },
}));

const checkForMulti = (itemToCheck) => {
  let multi = itemToCheck.img.length >= 2
  return multi;
}

const showFeed = (items, classes, isMobile) => {
  if (items.length > 0) {
    return (
      <Grid container className={classes.root} spacing={isMobile ? 4 : 6}>
        {items.map((item, index) => {
          return (
            <FeedCard
              key={index}
              img={item.img[0].url}
              projectName={item.projectName}
              clientName={item.clientName}
              description={item.description}
              ctaText={CTATEXT.CTA[0][item.type]}
              ctaLink={item.ctaLink}
              carousel={checkForMulti(item)}
            />
          );
        })}
      </Grid>
    );
  } else {
    return (
      <Grid container className={classes.root} spacing={isMobile ? 4 : 6}>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton animation="wave" className={classes.skeleton + " " + classes.skeletonImage} variant="rect" height={343} />
          <Skeleton animation="wave" className={classes.skeleton + " " + classes.skeletonText} variant="text" height={120} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton animation="wave" className={classes.skeleton + " " + classes.skeletonImage} variant="rect" height={343} />
          <Skeleton animation="wave" className={classes.skeleton + " " + classes.skeletonText} variant="text" height={120} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton animation="wave" className={classes.skeleton + " " + classes.skeletonImage} variant="rect" height={343} />
          <Skeleton animation="wave" className={classes.skeleton + " " + classes.skeletonText} variant="text" height={120} />
        </Grid>
      </Grid>
    );
  }
};

const Feed = (props) => {
  const [items, setItems] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(function effectFunction() {
    let isSubscribed = true;
    base("FeedItems")
      .select({
        view: "Grid view",
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          // console.log(record.fields);
          setItems((items) => [...items, record.fields]);
        });
      });
    isSubscribed = false;
  }, []);

  return <>{showFeed(items, classes, isMobile)}</>;
};

export default Feed;
