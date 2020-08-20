import React, { useState, useRef } from 'react';
import Navigation from './Navigation';
import Confetti from './ConfettiPuzzle';
import { Grid } from '@material-ui/core';
import TextBlock from './TextBlock';
import ItemGrid from './ItemGrid';

const Start = () => {
    return (
        <>
            <div>
                <Navigation />
                <TextBlock 
                    justify='center'
                    textType='large-paragraph centered'
                    text='A UI designer, currently at Volvo Group. 

                    Passionate about whacky things. Dissaproving of formalities.
                    
                    Have a look at some of the stuff I’ve made throughout the years :)'
                />
                <Grid 
                container
                justify="center"
                >
                <Confetti name="divider" confetti="jigsaw-2" />
                </Grid>
                <ItemGrid justify="space-between" spacing={2}/>
            </div>
        </>
    );
}

export default Start;