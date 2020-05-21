import React from 'react';
import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StyledButton = styled.div`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    color: white;
    background: red;
    font-size: 14px;
    font-weight: 400;
    margin: 0 1em;
    padding: .4em 16px;
    transition: 0.5s all ease-out;

    .MuiSvgIcon-root{
        margin-left: 8px;
    }

    
    &:hover {
        background-color: darkred;
        color: white;
    }
`

const Button = () => {
    return (
        <StyledButton>Read More <ArrowForwardIcon /></StyledButton>
    );
}

export default Button;