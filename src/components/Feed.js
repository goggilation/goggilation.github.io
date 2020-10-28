import React, { useState, useEffect } from "react";
import CTATEXT from "../content/feedContent.json";
import FeedCard from "./FeedCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import config from '../config'

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
  },
}));

const Feed = (props) => {
  const [items, setItems] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect( function effectFunction() {
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
          console.log(record.fields);
          setItems(items => [...items, record.fields]);
        });
      })
    }, []);

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
          />
        );
      })}
    </Grid>
  );
};

export default Feed;
