import React, { useState } from 'react';
import Button from '../Button'
import { Link } from 'react-router-dom';

const ConvertIdToPage = (id) => {
    switch(id){
        case 0:
            return "/detail";
        case 1:
            return "/about"
        default:
            return "/404";
    }
};

const PortfolioItem = (props) => {

    var title = props.title;
    var img = props.img;
    var id = ConvertIdToPage(props.id);
    var subtitle = props.subtitle;
    var description = props.description;

    return (
        <>
            <div style={{ background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + img + ')' }} id={id} className="page">
                <div className="content-box">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{description}</p>
                    <Link to={id}><Button /></Link>
                </div>
            </div>
        </>
    );
}

export default PortfolioItem;