import React, { useState, useRef } from 'react';
import PortfolioItem from './PortolioItem';
import Work from '../content/descriptions'
import Navigation from './Navigation';

const FullPage = () => {
    return (
        <>
            <Navigation />
            <div className="all" id="all">
                {Object.keys(Work).map(work => {
                    return (
                        <PortfolioItem
                            title={Work[work].title}
                            subtitle={Work[work].contractor}
                            description={Work[work].description}
                            img={Work[work].img} />
                    )
                })}
            </div>
        </>
    );
}

export default FullPage;