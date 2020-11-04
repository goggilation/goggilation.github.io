import React from "react";
import '../styles/style.css';
import Start from "./Start";
import FeedStart from "./FeedStart";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactStart from "./ContactStart";

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
        <Route exact path="/" activeClassName="current" component={Start} />
        <Route path="/feed" activeClassName="current" render={FeedStart} />
        <Route path="/contact" activeClassName="current" render={ContactStart} />
    </Switch>
    <Footer/>
    </Router>
    </div>
  );
};

export default () => <App />;
