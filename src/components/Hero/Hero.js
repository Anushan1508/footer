import React from 'react';
import "./Hero.css";


function Hero({heading, background}) {
    return (
        <div
            className="hero"
            style={{backgroundImage: `url(${background})`}}
        >
            <section>
                <h1 className="hero-heading">{heading}</h1>
            </section>
        </div>
    );
}

export default Hero;
