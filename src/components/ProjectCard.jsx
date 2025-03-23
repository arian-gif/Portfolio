import './projectcard.css';

function ProjectCard(props) {
    const image_style = {
        width: '100%', // Full width within container
        height: '30%', // Fixed height
        borderRadius: '8px', // Rounded corners
        marginBottom: '1rem', // Add space below the image
        border: '3px solid #555555', 
        animation: 'none',
    }
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className="image" />
            <h2 className="title">{props.category} Projects</h2>
            <div className="grid">
                {props.projects.map((project, index) => (
                    <div key={index} className="project">
                        <img 
                                src={project.image} 
                                alt={project.title} 
                                style={image_style} 
                            />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <button 
                            className="button" 
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            View Project
                        </button>
                    </div>
                ))}
            </div>
            <button 
                className="button github-button" 
                onClick={() => window.open('https://github.com/arian-gif?tab=repositories', '_blank')}
            >
                View More Projects on GitHub 
            </button>
        </div>
    );
}

export default ProjectCard;
