import React, { useState, useRef } from 'react';

const NavigationButton = ({active, onClick}) => {
    const navButton = useRef(null);

    return (
        <div ref={navButton} onClick={onClick} className={!active ? 'navigation-button' : 'navigation-button active' }></div>
    );
}

export default NavigationButton;