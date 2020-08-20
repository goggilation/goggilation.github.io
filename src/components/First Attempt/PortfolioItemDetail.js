import React, { useState, useRef } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const PortfolioItemDetail = (props) => {
    return (
        <>
        <Link to="/">
            Back
        </Link>
           <div style={{color: 'black'}}>
               {props.title}
           </div>
           <Button/>
        </>
    );
}

export default PortfolioItemDetail;