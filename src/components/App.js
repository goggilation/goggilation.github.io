import React from "react";
import '../styles/style.css';
import Start from "./Start";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from "@material-ui/core";
import Navigation from "./Navigation";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  wrapper: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '768px',
      margin: '24px auto'
    }
  }
}));


const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box width={matches ? '768px' : 'auto'} m={matches ? "24px auto" : 2}>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" activeClassName="current" component={Start} />
      </Switch>
      <Footer/>
      </Router>
    </Box>
  );
};

export default () => <App />;