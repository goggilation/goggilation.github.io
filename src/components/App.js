import React from "react";
import "../styles/style.css";
import Start from "./Start";
import Blog from "./Blog";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Post from '../posts/Post';
import Work from '../posts/Work';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(1),
  },
  wrapper: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "768px",
      margin: "24px auto",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper + " wrapper"}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" activeClassName="current" component={Start} />
          <Route path="/blog" activeClassName="current" render={Blog} />
          <Route path="/post/:slug" component={Post} />
          <Route path="/work/:slug" component={Work} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default () => <App />;
