import React from "react";
import '../styles/style.css';
import Start from "./Start";
import Work from "./Work";
import LibraryApp from "./work-posts/LibraryApp";
import SR from "./work-posts/SR";
import BigSurIcons from "./work-posts/BigSurIcons";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from "@material-ui/core";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Stena from "./work-posts/Stena";

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
          <Route exact path="/" component={Start} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/work/library-application" component={LibraryApp} />
          <Route exact path="/work/swedish-national-radio" component={SR} />
          <Route exact path="/work/big-sur-iconset" component={BigSurIcons} />
          <Route exact path="/work/stena-ar" component={Stena} />
      </Switch>
      <Footer/>
      </Router>
    </Box>
  );
};

export default () => <App />;