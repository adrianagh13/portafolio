import React from 'react';

import './styles/Portfolio.css';

import poke from '../images/poke.jpg'
import rick from '../images/rick.jpg'
import pvideo from '../images/pvideo.jpg'
import badges from '../images/badges.jpg'

const Portfolio = () => (
    <section id="portafolio" className="portfolio">
        <div className="wrapper">
            <h2>Portafolio (proyectos destacados)</h2>
            <article className="project">
                <div className="project-details"> 
                    <h3 className="project-title">PokeApp</h3>
                    <p className="project-url"><strong>Chécala </strong><a target="_blank" href="https://adrianagh13.github.io/Pokemon/">Aquí</a></p>
                    <p className="project-description">Aplicación web que muestra los datos de los 1050 pokemones existentes, renderiza 25 a la vez. <br />Los datos fueron extraídos de la <a href="https://pokeapi.co/"> API de pokemón </a>. Desarrollada con HTML, CSS, y React.</p>
                </div>
                <figure className="project-imageContainer">
                    <img className="project-image"src={poke} alt="video" width="400" height="200" />
                </figure>
            </article>
            <article className="project">
                <div className="project-details"> 
                    <h3 className="project-title">Rick and Morty App</h3>
                    <p className="project-url"><strong>Chécala </strong><a target="_blank" href="https://adrianagh13.github.io/rick-y-morty/">Aquí</a></p>
                    <p className="project-description">Web App que muestra a todos los personajes de la serie Rick y Morty. <br />Los datos fueron extraídos de la <a href="https://rickandmortyapi.com/"> API de Rick and Morty</a>. <br />Desarrollada con HTML, CSS, Bootstrap y React.</p>
                </div>
                <figure className="project-imageContainer">
                    <img className="project-image" src={rick} alt="video" width="500" height="300" />
                </figure>
            </article>
            <article className="project">
                <div className="project-details"> 
                    <h3 className="project-title">Platzi Badges</h3>
                    <p className="project-url"><strong>Chécala </strong> <a target="_blank" href="https://adrianagh13.github.io/platzi-badges/">Aquí</a></p>
                    <p className="project-description">La función de esta aplicación es gestionar los registros de usuarios asistentes a un evento, permite filtrar datos, editar y borrar registros. <br />Desarrollada con React, HTML, CSS y Bootstrap.</p>
                </div>
                <figure className="project-imageContainer">
                    <img className="project-image"src={badges} alt="video" width="500" height="300" />
                </figure>
            </article>
            <article className="project">
                <div className="project-details"> 
                    <h3 className="project-title">Platzi Video</h3>
                    <p className="project-url"><strong>Checa el repositorio: </strong><a target="_blank" href="https://github.com/adrianagh13/platzi-video-react">Aquí</a></p>
                    <p className="project-description">(En mantenimiento) Se trata de una plataforma de reproducción de videos que te permite registarte como usuario y crear tus propias listas de videos favoritos.<br />Desarrollada con HTML, CSS, Bootstrap y React.</p>
                </div>
                <figure className="project-imageContainer">
                    <img className="project-image"src={pvideo} alt="video" width="500" height="300" />
                </figure>
            </article>
            
        </div>
    </section>
);

export default Portfolio;