import React from 'react';
import './CardSlider.css';

function CardSlider(props) {
    return (
        <div className={props.visible ? 'card visible' : 'card hidden'}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default CardSlider;
