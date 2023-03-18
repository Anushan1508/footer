import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <i className={"card-icon " + props.icon}></i>
            <h3 className="card-heading">{props.heading}</h3>
            <p className="card-text">{props.text}</p>
            <button className="card-button">Read More</button>
        </div>
    );
}

export default Card;
