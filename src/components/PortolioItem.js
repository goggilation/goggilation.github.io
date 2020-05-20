import React, { useState } from 'react';
import Button from './Button'

const PortfolioItem = (props) => {

    var title = props.title;
    var img = props.img;
    var id = props.id;
    var subtitle = props.subtitle;
    var description = props.description;
        
    return (
        <>
           <div style={{background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+ img + ')'}} id={id} className="page">
               <div className="content-box">
                   <h1>{title}</h1>
                   <h2>{subtitle}</h2>
                   <p>{description}</p>
                   <Button/>
                </div>
            </div>
        </>
    );
}

export default PortfolioItem;