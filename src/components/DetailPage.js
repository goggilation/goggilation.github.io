import React, { useState, useRef } from 'react';
import Navigation from './Navigation';
import Confetti from './ConfettiPuzzle';
import { Grid } from '@material-ui/core';
import TextBlock from './TextBlock';
import ItemGrid from './ItemGrid';

document.body.classList.add('single');

const DetailPage = () => {
    return (
        <>
            <div>
                <Navigation logo={false}/>
                This is a detail page!
            </div>
        </>
    );
}

export default DetailPage;