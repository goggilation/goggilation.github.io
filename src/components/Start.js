import React, { useState, useRef } from 'react';
import PortfolioItem from './PortolioItem';
import Work from '../content/descriptions'
import Navigation from './Navigation';

const FullPage = () => {
    const numOfPages = [1, 2, 3];
    return (
        <>
            <Navigation/>
            <div className="all" id="all">
                <PortfolioItem 
                    title={Work.Musikhjalpen.title}
                    subtitle={Work.Musikhjalpen.contractor}
                    description={Work.Musikhjalpen.description}
                    id="1"
                    img="../src/imgs/mh.jpg"/>

                <PortfolioItem
                    title={Work.CGI.title}
                    subtitle={Work.CGI.contractor}
                    description={Work.CGI.description}
                    id="2"
                    img="../src/imgs/hopl_small.png"/>

                <PortfolioItem
                    title={Work.Volvo.title}
                    subtitle={Work.Volvo.contractor}
                    description={Work.Volvo.description}
                    id="3"
                    img="../src/imgs/hopl.png"/>
            </div>
        </>
    );
}

export default FullPage;