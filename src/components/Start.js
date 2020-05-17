import React, { useState, useRef } from 'react';
import PortfolioItem from './PortolioItem';

var i = 0;

function ClickMe(){
    var scrollWidth = document.getElementById('1').scrollWidth;
    var all = document.getElementById('all');
    console.log(scrollWidth);
    i++;
    if(i >= 3){
        i = 0;
        all.scrollBy({ left: -scrollWidth * 2, behavior: 'smooth' });
    }else{
        all.scrollBy({ left: scrollWidth, behavior: 'smooth' });
    }
};

function FullPage() {
    
    return (
        <>
            <div onClick={ClickMe} id="HelloClick">Hello</div>
            <div className="all" id="all">
                <PortfolioItem title="Page 1" id="1" img=""/>
                <PortfolioItem title="Page 2" id="2" img=""/>
                <PortfolioItem title="Page 3" id="3" img=""/>
            </div>
        </>
    );
}

export default FullPage;