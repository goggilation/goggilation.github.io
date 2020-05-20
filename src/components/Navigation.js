import React, { useState } from 'react';
import NavigationButton from './NavigationButton';

const Navigation = () => {
    const [chosen, setChosen] = useState(0);
    const pages = [0, 1, 2];
    const setChosenPage = (page) => {
        setChosen(page);
        console.log(chosen);
    };

    const NavigateTo = (pos) => {
        var pageWidth = window.innerWidth;
        var scrollWidth = pageWidth * pos;
        var all = document.getElementById('all');
        console.log(scrollWidth);
        all.scrollTo({top: 0, left: scrollWidth, behavior: 'smooth'});
    };

    return (
        <>
           <div className="navigation">
               {pages.map(page => (
                    <NavigationButton
                        key={page}
                        position={page}
                        active={page === chosen}
                        onClick={() => {setChosenPage(page), NavigateTo(page)}}
                   />
               ))}
           </div>
        </>
    );
}

export default Navigation;