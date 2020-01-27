import React from 'react';
import propTypes from 'prop-types';
import { bool, string, int } from 'prop-types';
import { Grid, Paper, Typography, Card, CardMedia, CardHeader } from '@material-ui/core';


const GridItem = ({ elevation, title, length }) => {
    return (
        <Grid item xs={length}>
            <Card elevation={elevation ? '0' : '3'}>
                <CardHeader
                    title={title}
                />
                <CardMedia 
                    image="https://via.placeholder.com/150.jpg"
                />
            </Card>
        </Grid>
    )
}

GridItem.propTypes = {
    elevation: bool,
    title: string,
    length: int
};

export default GridItem;