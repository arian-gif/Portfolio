import files from "../data/projects";
import ".././spacer/spacer.css";
import spacer_style from ".././spacer/spacer";

function Projects() {
    const backgroundStyle = {
        backgroundImage: "url('/assets/images/blue-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        ...spacer_style
    };

    const cardStyle = {
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '2rem auto',
    };

    const headingStyle = {
        color: '#222',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '0.75rem',
        letterSpacing: '0.5px',
    };
    
    const textStyle = {
        color: '#444',
        fontSize: '1.3rem',
        fontWeight: '500',
        letterSpacing: '0.3px',
        lineHeight: '1.6',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        justifyContent: 'center',
    };

    const lastItemStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        justifyContent: 'center',
        paddingTop: '1rem',
    };

    const itemStyle = {
        flex: '0 1 calc(50% - 0.5rem)',
        backgroundColor: '#ffffff',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
    };

    
    const renderProjectItem = (file, index) => (
        <a key={index} href={file.route} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={itemStyle}>
                <img src="/assets/images/file.png" alt={file.category} />
                <p style={textStyle}>{file.category}</p>
            </div>
        </a>
    );

    return (
        <div className="wrapper" style={backgroundStyle}>
            <div className="spacer" />
            <div className="card" style={cardStyle}>
                <h1 style={headingStyle}>Projects</h1>
                <p style={textStyle}>
                    "Why was the project stressed? Too many dependencies!" <br />
                    Well, let's see those projects — click to learn more!
                </p>
                <div style={{ ...gridStyle, paddingTop: '1rem' }}>
                    {files.map((file, index) => (
                        files.length % 2 === 0
                            ? renderProjectItem(file, index)
                            : index !== files.length - 1 && renderProjectItem(file, index)
                    ))}
                </div>

                {files.length % 2 !== 0 && (
                    <div style={lastItemStyle}>
                        {renderProjectItem(files[files.length - 1], files.length - 1)}
                    </div>
                )}
            </div>
            <div className="spacer" />
        </div>
    );
}

export default Projects;
