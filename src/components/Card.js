import React from "react";
import {string} from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  card:{
    cursor: 'pointer',

    "&:hover button": {
      fontWeight: "600",
    },

    "&:hover button::after": {
      marginRight: "24px",
    },
  },

  button: {
    fontFamily: "Playfair Display",
    fontWeight: "400",
    width: "100%",
    height: "56px",
    border: "none",
    backgroundColor: "#fff",
    textAlign: "left",
    paddingLeft: "8px",
    cursor: "pointer",
    transition: "all 250ms",
    margin: 0,

    '&:active': {
      backgroundColor: '#f1f1f1',
    },

    "&:active, &:focus": {
      outline: "none",
      border: "none",
    },

    "&::after": {
      content: '"➡"',
      fontSize: "16px",
      float: "right",
      marginRight: "16px",
      fontWeight: "bold",
      transition: "all 250ms",
    },
  },

  text: {
    margin: 0,
  },

  imageContainer:{
    backgroundSize: 'cover !important',
    backgroundPosition: "center center !important",
    height: '360px',
  },

  img: {
    margin: 0,
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "auto",
      display: "block",
    },
  },
}));

export const Card = (props) => {
  const classes = useStyles();
  return (
      <Grid className={classes.card} container spacing={0} direction="column">
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item><h5 className={classes.text} >{props.title}</h5></Grid>
            <Grid item><p className={classes.text + " body1"}>{props.excerpt}</p></Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.img}>
          <div className={classes.imageContainer} style={{background: `url(${props.image})`}}></div>
        </Grid>
        <Grid item>
          <button className={classes.button}>Read Post</button>
        </Grid>
      </Grid>
  );
};

Card.propTypes = {
  title: string,
  excerpt: string,
  image: string,
};

Card.defaultProps = {
  title: 'Post title',
  excerpt: 'An excerpt below the title',
  image: 'https://designshack.net/wp-content/uploads/placeholder-image.png',
};
