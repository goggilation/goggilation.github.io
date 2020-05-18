import React, { useState } from 'react';

function PortfolioItem(props) {

    var title = props.title;
    var img = props.img;
    var id = props.id;
        
    return (
        <>
           <div style={{background: 'url('+ img + ')'}} id={id} className="page">
               <h1>{title}</h1>
            </div>
        </>
    );
}

export default PortfolioItem;