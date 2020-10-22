import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navigation from "./Navigation";
import { useTheme, useMediaQuery, Paper } from "@material-ui/core";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  skillHeader: {
    margin: theme.spacing(1),
  },
  helloSection: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "534px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "680px",
    },
  },
}));

const Start = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={4} direction="column">
        <Grid item className={classes.helloSection}>
          <h5>Hi! I'm Aleks 👋</h5>
          <p className="body1">
            Cupcake ipsum dolor sit amet I love cake croissant. Pastry sweet
            roll cheesecake danish fruitcake candy canes I love. Caramels jelly
            tiramisu.
          </p>
        </Grid>
        <Grid item>
          <h6 className={classes.skillHeader}>Work</h6>
          <Grid container spacing={4}>
            <Card
            image="/src/images/skills/volvo.jpg"
              overline="Current"
              subtitle1="UI Designer"
              subtitle2="Volvo Group"
            />
            <Card
            image="/src/images/skills/cgi.png"
              overline="2017-2020"
              subtitle1="UX Design Consultant"
              subtitle2="CGI"
            />
            <Card
            image="/src/images/skills/sr.png"
              overline="2015-2017"
              subtitle1="Graphic Designer"
              subtitle2="Swedish National Radio"
            />
          </Grid>
        </Grid>
        <Grid item>
          <h6 className={classes.skillHeader}>Studies</h6>
          <Grid container spacing={4}>
            <Card
              overline="2011-2014"
              subtitle1="Bachelor of Arts"
              subtitle2="Karlstads University"
            />
            <Card
              overline="2014"
              subtitle1="C# Programming"
              subtitle2="Malmö University"
            />
            <Card
              overline="2014"
              subtitle1="Web Development"
              subtitle2="Blekinge Technical College"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Start;
