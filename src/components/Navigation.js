import React, { useState, useRef } from 'react';
import Button from './Button';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import {BrowserRouter as Router} from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';



const Navigation = (props) => {
    let showLogo = props.logo ? <Logo /> : "<div>Page Title</div>";
    return (
        <>
            <nav>
                <Router>
            <Grid className="nav-grid"
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Grid item>
                        <Link to='/'><Button title="Work" icon={<WorkIcon/>}/></Link>
                    </Grid>
                    <Grid item lg={6} m={8} sm={6} className='logo-flex'>
                        {showLogo}
                    </Grid>
                    <Grid item>
                        <Link to="/contact"><Button title="Contact" icon={<MailIcon/>}/></Link>
                    </Grid>
                </Grid>
                </Router>
            </nav>
        </>
    );
}

export default Navigation;