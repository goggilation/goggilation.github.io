import React from 'react';
import Start from './Start';
import PortfolioItemDetail from './First Attempt/PortfolioItemDetail';

import { 
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const App = () => {
    return(
        <Start/>
        )
    };

export default () => <App/>;