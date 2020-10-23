import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const FeedCard = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <div className={classes.root + " " + classes.card}>
        <Grid container alignItems="center">
            <p>{props.projectName}</p>
            <p>{props.clientName}</p>
            <p>{props.description}</p>
            <p>{props.ctaText}</p>
        </Grid>
      </div>
    </Grid>
  );
};
FeedCard.propTypes = {
    img: PropTypes.string,
    projectName: PropTypes.string,
    clientName: PropTypes.string,
    description: PropTypes.string,
    ctaText: PropTypes.string
};

FeedCard.defaultProps = {
    projectName: "Project Name",
    clientName: "Client Name",
    description: "Description of feed item",
};
export default FeedCard;
