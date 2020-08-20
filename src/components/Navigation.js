import React, { useState, useRef } from 'react';
import Button from './Button';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';

// document.body.classList.add('single');

const Navigation = () => {
    return (
        <>
            <nav>
            <Grid className="nav-grid"
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Grid item>
                        <Button title="Work" icon={<WorkIcon/>}/>
                    </Grid>
                    <Grid item lg={6} m={8} sm={6} className='logo-flex'>
                        <Logo />
                    </Grid>
                    <Grid item>
                        <Button title="Contact" icon={<MailIcon/>}/>
                    </Grid>
                </Grid>
            </nav>
        </>
    );
}

export default Navigation;