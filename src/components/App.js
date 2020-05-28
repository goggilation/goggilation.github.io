import React from 'react';
import Start from './Start';
import PortfolioItemDetail from './PortfolioItemDetail';

import { 
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Start} />
                <Route path="/detail" render={(props) => <PortfolioItemDetail {...props} title="Test" />}/>
            </div>
        </Router>
        )
    };

export default () => <App/>;