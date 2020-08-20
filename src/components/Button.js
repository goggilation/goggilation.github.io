import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
cursor: pointer;

font-family: 'Kanit';
font-weight: 700;
font-style: italic;
font-size: 16px;
color: #2C2728;

display: inline-flex;
align-items: center;
justify-content: center;
height: 48px;
padding: 0 8px;
border-radius: 9px;

background: #F2F2F2;
box-shadow: -5px 6px 0px 0px black;


transition: 0.1s all;

    
    &:hover {
        box-shadow: -2px 4px 0px 0px black;
        transform: translate(-2px, 4px);
    }
`

const CheckForIcon = (iconProp) => {
    let icon = <MailIcon/>

    if(iconProp != 'Mail') icon = <WorkIcon/>

    return icon;
}

const Button = (props) => {
    var title = props.title;

    return (
            <StyledButton className='nav-button'>{props.icon} {title}</StyledButton>
    );
}

export default Button;