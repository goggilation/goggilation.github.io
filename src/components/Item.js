import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid'

import {
    HashRouter as Router,
    NavLink as Link
} from 'react-router-dom';

const Item = (props) => {
    return (
        <>
        <Router>
            
            <Grid item className="item" xs={10} sm={4} m={3} lg={2}>
            <Link to={props.link}>
                <div className="item-title">
                    <p className="subtitle2">{props.title}</p>
                </div>
                <div className="item-img">
                    <img src={props.img} />
                </div>
            </Link>
            </Grid>
        </Router>
        </>
    );
}

export default Item;