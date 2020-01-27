import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import createSpacing from '@material-ui/core/styles/createSpacing';

const AppBarLuxe = styled(AppBar)`
  margin-bottom: 24px;
`;

const NavBar = () => {
    return (
        <div>
            <AppBarLuxe position="static" color="primary">
                <Toolbar>
                    <Typography variant="title">
                        aleksander Djordjevic
                    </Typography>
                </Toolbar>
            </AppBarLuxe>
        </div>
    )
}

export default NavBar;