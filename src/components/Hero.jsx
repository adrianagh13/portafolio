import React from 'react';

import './styles/Hero.css';

import adriana from '../images/me.jpg';

const Hero = () => (
    <section className="hero">
        <div className="wrapper">
            <h1>¡Hola! Soy <strong>Adriana Gómez</strong> <br /> Desarrolladora Frontend Junior </h1>
            <figure className="img-wrapper">
                <img src={adriana} width="330" height="420" alt="imagen hero" /> 
            </figure>
        </div>
    </section>
);

export default Hero;