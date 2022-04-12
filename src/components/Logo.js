import React, { useState, useRef } from 'react';

const logos = {
    large: 'https://dl.airtable.com/.attachments/e9ffc6c58ef927736257caec6b76e560/4f507107/Transparent_large.png',
    small: 'https://dl.airtable.com/.attachments/388cead153bb9e58ba47636bd5fe4bbb/cd61b169/Transparent_small.png',
    xsmall: 'https://dl.airtable.com/.attachments/8de7a0a3cb86b5311d364994461e34a3/4a7f5529/Transparent_xsmall.png',
    transparent: 'https://dl.airtable.com/.attachments/183630b566ab541ab3871fd2cd76064a/415bf522/Transparent.png',
    transparentSvg: 'https://dl.airtable.com/.attachments/90e0e4689c734ca1469c565fac6eb401/5fcf7a94/Transparent.svg'
}

//"src/logos/Transparent_" + props.size + ".png"

const Logo = (props) => {
    return (
        <>
            <img style={{float: "left"}} src={logos[props.size]} />
        </>
    );
}

export default Logo;