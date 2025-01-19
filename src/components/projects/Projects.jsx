import React, { useState } from 'react'
import { Data } from './Data';
import "./projects.css"
import { ProjectCard } from './ProjectCard';

export const Projects = () => {

    return (
        <section className="projects section" id='projects'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Jobs and Practices</span>

            <div className="projects__container container">
                <div className="projects__sections">
                    <div className="projects__content">
                        {Data.map((project) => (
                            <a href={project.link} key={project.id} target="_blank">
                                <ProjectCard project={project} />
                            </a>  
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}