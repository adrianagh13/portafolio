import React from 'react';

import terminal from '../images/terminal.jpg';
import git from '../images/git.jpg'
import prework from '../images/prework.jpg'
import basica from '../images/basica.jpg'
import basico from '../images/basico.jpg'
import fundamentos from '../images/fundamentos.jpg'
import frontend from '../images/frontend.jpg'
import desarrollo from '../images/desarrollo.jpg'
import es6 from '../images/es6.jpg'
import async from '../images/async.jpg'
import profesional from '../images/profesional.jpg'
import jquery from '../images/jquery.jpg'
import react from '../images/react.jpg'
import reactjs from '../images/reactjs.jpg'
import escritura from '../images/escritura.jpg'
import tecnico from '../images/ingles-tecnico.jpg'
import practico from '../images/ingles-practico.jpg'
import gestion from '../images/gestion.jpg'
import './styles/Courses.css';

const Courses = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <h2 className="event-list-title">Cursos que he tomado</h2>
            </div>
            <section id="experiencia" className="event-list">
                <div className="wrapper">
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={terminal} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Introducción a la Terminal y Línea de Comandos</h3>
                            <p className="event-description" >Este curso consiste en saber más alla de las herramientas básicas de terminales basadas en el SO Linux.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1276-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={git} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Git y Github</h3>
                            <p className="event-description" >Me brindó los conocimientos esenciales para el manejo profesionalmente de repositorios locales y remotos en un entorno de desarrollo laboral.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1557-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={prework} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Prework: Buenas prácticas y entorno de desarrollo</h3>
                            <p className="event-description" >Aprendí sobre las buenas prácticas que se deben de seguir al momento de configurar proyectos y sobre cómo implementar herramientas o librerías para mejorar el trabajo.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1650-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={basica} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Programacion básica</h3>
                            <p className="event-description" >Este curso me brindó las bases necesarias para adentrarme en el mundo del Desarrollo Web, pude desarrollar la lógica y habilidades necesarias para programar.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1050-programacion-basica/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={fundamentos} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Fundamentos de Javascript</h3>
                            <p className="event-description" >Obtuve los conocimientos más fundamentales del lenguaje, aprendí a trabajar con promesas, requests, etc.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1339-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={desarrollo} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Desarrollo Web Online</h3>
                            <p className="event-description" >Pude obtener desde los conceptos más básicos de la maquetación en HTML5 y CSS3.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1350-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={frontend} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Frontend Developer</h3>
                            <p className="event-description" >Aprendí todas las herramientas necesarias para dar estilo al Front de aplicaciones sin necesidad de implementar librerías, sólo con HTML y CSS.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1640-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={basico} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Básico de Javascript</h3>
                            <p className="event-description" >Este curso me sirvió para reforzar conocimientos previos como el manejo de arreglos, ciclos, condicionales, tipos de operadores, etc.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1814-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={es6} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">ECMAScript 6+</h3>
                            <p className="event-description" >Me resultó elemental este curso pues aprendí las implementaciones que se le hacen año con año al lenguaje Javascript, ello es mediante nuevas Ver Diplomasiones de ECMAScript.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1815-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={async} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Asincronismo</h3>
                            <p className="event-description" >Gracias a este curso logré comprender cómo funciona el asincronismo en Javascript, aprendí a hacer peticiones con callbacks, promesas y async-await para extraer información de API's.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1789-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={jquery} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">De jQuery a Javascript</h3>
                            <p className="event-description" >El propósito de este curso es saber utilizar Vanilla JS (el lenguaje puro) sin necesidad de librerías o frameworks tal como lo es jQuery.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1316-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>

                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={profesional} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Profesional JS</h3>
                            <p className="event-description" >Definitivamente uno de mis cursos favoritos, aprendí desde prototipos, la organización del DOM el funcionamiento del Engine del lenguaje en el navegador, fetching de peticiones, manejo de Typescript, Service Workers, patrones de diseño, y demás herramientas.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1642-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={react} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Práctico de React JS</h3>
                            <p className="event-description" >En este interesantísimo curso, aprendí a manejar Webpack para crear una React app desde cero, pude implementar SASS como preprocesador, y logré crear una fake API desde JSON-SERVer Diploma.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1651-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={reactjs} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">React JS</h3>
                            <p className="event-description" >Aprendí desde lo más básico de React, como, qué es un componente, tipos, ciclos de vida, hasta cómo utilizar la librería React Router para gestionar las rutas de la aplicación web y dar estilos con Bootstrap.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1548-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={escritura} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Escritura en inglés</h3>
                            <p className="event-description" >Obtuve herramientas muy útiles para escribir diferentes tipos de textos en inglés en un ambiente profesional.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1279-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={practico} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Inglés ráctico: Conversación</h3>
                            <p className="event-description" >Reforcé conocimientos sobre cómo mantener una conversación adecuada en inglés, ya sea en un ambiente formal o informal.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1501-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={tecnico} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Inglés técnico para profesionales</h3>
                            <p className="event-description" >Me sirvió bastante para aprender a desarrollarme en el entorno laboral y profesional en inglés, obtuve herramientas y consejos para saber cómo crear un CV, un portafolio profesional, prepararme para una entrevista, etc. </p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1188-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    <article className="event">
                        <figure className="event-imageContainer">
                            <img className="event-image" src={gestion} width="500" height="300"/>
                        </figure>
                        <div className="event-detail">
                            <h3 className="event-title">Gestión efectiva del tiempo</h3>
                            <p className="event-description" >Uno de los mejores cursos que he tomado. Aprendí a identificar las tareas que tengo por hacer y organizarlas de acuerdo a prioridades y conocí técnicas de estudio muy útiles.</p>
                            <a target="_blank" href="https://platzi.com/@AdrianaGomezHinojosa/curso/1749-course/diploma/detalle/">Ver Diploma </a>
                        </div>
                    </article>
                    
                </div>
            </section>
        </ React.Fragment>
    )
}

export default Courses;