import "./projects.css"

export const ProjectCard = ({project}) => {
    return (
        <div className="projects__card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <span className="projects__description">{project.descripcion}</span>
        </div>
    );
};
