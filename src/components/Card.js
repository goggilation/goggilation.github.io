import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    borderRadius: "5px",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#44434375",
      cursor: "pointer",
    },
  },
  textSection: {
    marginLeft: theme.spacing(1),
  },
  img: {
    padding: "8px",
    "& img": {
      borderRadius: "5px",
      width: "100%",
      height: "auto",
    },
  },
}));

const Card = (props) => {
  const classes = useStyles();
  let imageClass = "img";
  const showImage = (textOnly) => {
    if (props.image != undefined) {
      return (
        <Grid container xs={2}>
          <Grid item className={classes.img}>
            <img src={props.image} />
          </Grid>
        </Grid>
      );
    } else {
      return;
    }
  };

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <div className={classes.root + " " + classes.card}>
        <Grid container alignItems="center">
          {showImage()}
          <Grid
            className={classes.textSection}
            container
            direction="column"
            spacing={0}
            xs={9}
          >
            <Grid item>
              <p className="overline">{props.overline}</p>
            </Grid>
            <Grid item>
              <p className="subtitle1">{props.subtitle1}</p>
            </Grid>
            <Grid item>
              <p className="subtitle2">{props.subtitle2}</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  overline: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
};

Card.defaultProps = {
  overline: "",
  subtitle1: "Subtitle 1",
  subtitle2: "Add subtitle",
};
export default Card;
