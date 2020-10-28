import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} direction="column">
        <Grid item className={classes.helloSection}>
          <h5>Contact</h5>
          <p className="body1">
            Feel free to reach out to me whatever way suits you best! :)
          </p>
        </Grid>
        <Grid item>
          <Grid container spacing={4}>
            <Card
            link="https://twitter.com/goggilation"
            image="./src/images/contact/twitter.png"
              overline="Twitter"
              subtitle1="@goggilation"
            />
            <Card
            link="https://dribbble.com/goggilation"
              image="./src/images/contact/dribbble.png"
              overline="Dribbble"
              subtitle1="@goggilation"
            />
            <Card
            link="mailto:aleks@aleksanderd.se"
            image="./src/images/contact/mail.png"
              overline="Email"
              subtitle1="aleks@aleksanderd.se"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Contact;
