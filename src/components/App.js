import React from "react";
import '../styles/style.css';
import Start from "./Start";
import FeedStart from "./FeedStart";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  wrapper: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1032px',
      margin: '24px auto'
    }
  }
}));


const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper + " wrapper"}>
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/feed" render={FeedStart} />
        <Route path="/contact" render={Contact} />
    </Switch>
    <Footer/>
    </Router>
    </div>
  );
};

export default () => <App />;
