import React, { useState, useRef } from 'react';

const Logo = (props) => {
    return (
        <>
            <img src={"src/images/logo/Transparent_" + props.size + ".png"} />
        </>
    );
}

export default Logo;