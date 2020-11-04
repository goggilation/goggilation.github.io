import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider } from "@material-ui/core";
import Carousel from "nuka-carousel";
import { render } from "react-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    backgroundColor: "#fff",
    color: "#282828",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    overflow: "hidden",
  },
  image: {
    height: "343px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  MuiDivider: {
    backgroundColor: "#fff",
  },
  button: {
    textAlign: "right",
  },
}));

const FeedCard = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      {/* Card */}
      <Grid container direction="column" spacing={2} className={classes.card}>
        {props.carousel ? (
          <Carousel
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: "rgba(255,255,255,.92)",
              },
            }}
            disableEdgeSwiping
          >
            {props.imgs.map((item, index) => {
              return (
                <Grid
                  item
                  className={classes.image + " multi"}
                  style={{ backgroundImage: "url(" + item.url + ")" }}
                />
              );
            })}
          </Carousel>
        ) : (
          <Grid
            item
            className={classes.image}
            style={{ backgroundImage: "url(" + props.imgs[0].url + ")" }}
          />
        )}
        <Grid item>
          {/* Card Content */}
          <Grid container spacing={1} direction="column">
            {/* Project & Client */}
            <Grid item className={classes.filler}>
              <Grid container direction="row">
                <Grid container direction="column" xs={8} spacing={0}>
                  <Grid item>
                    <span className="overline">Project</span>
                  </Grid>
                  <Grid item>
                    <span className="subtitle1">{props.projectName}</span>
                  </Grid>
                </Grid>
                <Grid container direction="column" xs={4} alignItems="flex-end">
                  <Grid item>
                    <span className="overline">Client</span>
                  </Grid>
                  <Grid item>
                    <span className="subtitle1">{props.clientName}</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            {/* Content */}
            <Grid item>
              <span className="body2">{props.description}</span>
            </Grid>
            <Grid item xs={12} className={classes.button}>
              <Button href={props.ctaLink}> {props.ctaText} </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
FeedCard.propTypes = {
  img: PropTypes.string,
  projectName: PropTypes.string,
  clientName: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

FeedCard.defaultProps = {
  projectName: "Project Name",
  clientName: "Client Name",
  description: "Description of feed item",
  ctaLink: "#",
};
export default FeedCard;
