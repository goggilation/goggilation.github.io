import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid'

const Item = (props) => {
    return (
        <>
            <Grid item className="item" xs={10} sm={4} m={3} lg={2} justify="space-around">
                <div className="item-title">
                    <p class="subtitle2">{props.title}</p>
                </div>
                <div class="item-img">
                    <img src={props.img} />
                </div>
            </Grid>
        </>
    );
}

export default Item;