import React, { useState } from 'react';
import NavigationButton from './NavigationButton';

const Navigation = () => {
    const [chosen, setChosen] = useState(0);
    const pages = [0, 1, 2];

    const setChosenPage = (page) => {
        setChosen(page);
    };

    const NavigateTo = (pos) => {
        const all = document.getElementById('all');
        var scrollWidth = (window.innerWidth) * pos;
        all.scrollTo({ top: 0, left: scrollWidth, behavior: 'smooth' });
    };

    return (
        <>
            <div className="navigation">
                {pages.map(page => (
                    <NavigationButton
                        key={page}
                        position={page}
                        active={page === chosen}
                        onClick={() => { setChosenPage(page), NavigateTo(page) }}
                    />
                ))}
            </div>
        </>
    );
}

export default Navigation;