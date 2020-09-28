import React from 'react';

import './styles/Header.css'
import logo from '../images/loguito.jpg'

const Header = () => (
    <header className="header">
        <div className="wrapper">
            <figure className="logo">
                <img width="120" height="120" src={logo} alt="mi logo"/> 
            </figure>
            <nav className="menu">
                <ol>
                    <li>
                        <a className="link" href="#portafolio">Portafolio</a>
                    </li>
                    <li>
                        <a className="link" href="#experiencia">Cursos</a>
                    </li>
                    <li>
                        <a className="link" href="#contacto">Contacto</a>
                    </li>
                </ol>
            </nav>
        </div>
    </header>
);

export default Header;

