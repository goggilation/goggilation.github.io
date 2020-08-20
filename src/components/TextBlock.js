import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid'

const TextBlock = (props) => {
    return (
        <>
            <Grid 
                container
                justify={props.justify}
                spacing={props.spacing}
                direction={props.direction}
                alignItems={props.alignItems}
                >
                    <Grid item className="text-box">
                        <p className={props.textType}>
                            {props.text}
                        </p>
                    </Grid>
                </Grid>
        </>
    );
}

export default TextBlock;