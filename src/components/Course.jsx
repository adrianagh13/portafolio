import React from 'react';

import './styles/Course.css';

const Course = props => (
    <article className="event">
        <figure className="event-imageContainer">
            <img className="event-image" src={props.image} width="500" height="300"/>
        </figure>
        <div className="event-detail">
            <h3 className="event-title">{props.title}</h3>
            <p className="event-description" >{props.description}</p>
            <a className="event-url" href={props.url} target="_blank">Ver Diploma</a>
        </div>
    </article>
);

export default Course;