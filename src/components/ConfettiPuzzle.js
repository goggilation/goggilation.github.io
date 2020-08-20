import React, { useState, useRef } from 'react';

const confettiPath = "../src/content/imgs/fixed/confetti/";

const Confetti = (props) => {
    let confetti = confettiPath + props.confetti + ".png";
    return (
        <>
            <img className={props.name + "-confetti"} src={confetti} />
        </>
    );
}

export default Confetti;