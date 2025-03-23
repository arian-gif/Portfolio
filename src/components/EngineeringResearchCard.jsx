import "./ProjectCard.css";

function EngineeringResearchCard(props) {
    const engCard = {
        background: 'linear-gradient(135deg, #f7f7f7, #eaeaea)', 
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        padding: '40px',
        margin: '24px auto',
        width: '98%',
        maxWidth: '1200px',
        transition: 'transform 0.2s ease-in-out',
        textAlign: 'center',
    }
    const inside_style = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1.5rem', // Increased gap between "What", "How", "Result"
        justifyContent: 'center',
        gridAutoFlow: 'dense'
    }
    
    const outside_style = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '4rem', // Increased gap between different projects
        justifyContent: 'center',
        gridAutoFlow: 'dense',
        padding: '2rem' // Increased padding to give more breathing room
    }
    
    const project_style = {
        backgroundColor: 'lightgray', // Changed to white for contrast
        padding: '1.5rem',
        marginBottom: '2rem', // Increased margin for vertical spacing between projects
        borderRadius: '12px', // Optional for rounded edges
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added shadow for better separation
        width:"100%",
    }
    const image_style = {
        width: '90%', // Full width within container
        height: '30%', // Fixed height
        objectFit: 'cover', // Crop and maintain aspect ratio
        borderRadius: '8px', // Rounded corners
        marginBottom: '1rem', // Add space below the image
        border: '2px solid black', 
        animation: 'none',
    }
    
return (
    <div>
        <div className="card" style={engCard}>
            <img src={props.image} alt={props.title} className="image" />
            <h2 className="title">{props.category} Projects</h2>
            <div className="outside" style={outside_style}>
                {props.projects.map((project, index) => (
                    <div key={index} className="project-container" style={project_style}>
                        <h2 style={{ marginBottom: "1.5rem" }}>{project.title}</h2>
                        <div className="inside" style={inside_style}>
                            <div className="project">
                            <img 
                                src={project.whatImage} 
                                alt={project.title} 
                                style={image_style} 
                            />

                                <h3 className="project-title">What</h3>
                                <ul>
                                    <li className="project-description" style={{listStylePosition: 'inside', paddingLeft: '0',display: 'list-item' }}>{project.What[0]}</li>
                                    <li className="project-description" style={{listStylePosition: 'inside', paddingLeft: '0', display: 'list-item'}}>{project.What[1]}</li>
                                </ul>
                            </div>
                            <div className="project">
                            <img 
                                src={project.howImage} 
                                alt={project.title} 
                                style={image_style} 
                            />
                                <h3 className="project-title">How</h3>
                                <ul>
                                    <li className="project-description" style={{listStylePosition: 'inside', paddingLeft: '0', display: 'list-item'}}>{project.How[0]}</li>
                                    <li className="project-description" style={{listStylePosition: 'inside', paddingLeft: '0', display: 'list-item'}}>{project.How[1]}</li>
                                </ul>
                            </div>
                            <div className="project">
                                <iframe
                                    style={image_style} 
                                    src={project.resultVid}
                                    title="Robot video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <h3 className="project-title">Result</h3>
                                <p className="project-description">{project.Result}</p>
                            </div>
                        </div>
                        <button 
                            className="button github-button" 
                            onClick={() => window.open(project.codeLink, '_blank')}
                        >
                            View Code
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
    </div>
);
}

export default EngineeringResearchCard;