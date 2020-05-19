import React, { useState, useRef } from 'react';
import PortfolioItem from './PortolioItem';
import { musikhjalpen, description2, description3 } from '../content/descriptions'

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
                <PortfolioItem 
                    title="Musikhjälpen"
                    subtitle="Sveriges Radio"
                    description={musikhjalpen}
                    id="1"
                    img="../src/imgs/mh.jpg"/>

                <PortfolioItem
                    title="Page 2"
                    subtitle="Sveriges Radio"
                    description={description2}
                    id="2"
                    img="../src/imgs/hopl_small.png"/>

                <PortfolioItem
                    title="Page 3"
                    subtitle="Sveriges Radio"
                    description={description3}
                    id="3"
                    img="../src/imgs/hopl.png"/>
            </div>
        </>
    );
}

export default FullPage;