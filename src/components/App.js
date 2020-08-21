import React from "react";
import Start from "./Start";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import DetailPage from "./DetailPage";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Start} />
        <Route path="/detail" render={DetailPage} />
      </div>
    </Router>
  );
};

export default () => <App />;
