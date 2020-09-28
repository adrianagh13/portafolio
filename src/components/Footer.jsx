import React from 'react';

import './styles/Footer.css'
import fb from '../images/facebook.png'

const Footer = () => (
    <section id="contacto" className="contact">
        <div className="wrapper">
            <form action="/suscripcion/" className="form-email">
                <label htmlFor="email">¿Creamos algo juntos?</label> 
                <input type="input" placeholder="Déjanos tu email" id="email" /> 
                <button>Enviar</button>
            </form>
            <div className="social">
                <h3>Encuéntrame en mis redes sociales :)</h3>
                <a href="https://facebook.com/adrianaguadalupe.gh" className="social-link facebook" target="_blank" style={{ backgroundImage: `url(${require('../images/facebook.png')})`}}></a>
                <a href="https://github.com/adrianagh13" className="social-link github" target="_blank" style={{ backgroundImage: `url(${require('../images/github.png')})`}}></a>
                <a href="https://instagram.com/adriannggh" className="social-link instagram" target="_blank" style={{ backgroundImage: `url(${require('../images/instagram.png')})`}}></a>
            </div>
        </div>
    </section>
)

export default Footer;