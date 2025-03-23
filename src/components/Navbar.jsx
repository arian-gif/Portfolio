import navPages from "../data/navPages";
import './Navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar(){
    return (
        <nav className="navbar">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/ariansadatkhan" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/arian-gif" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub /> GitHub
                </a>
            </div>

            <div className="nav-links">
                {navPages.map((page) => (
                    <a key={page.pageName} href={page.link} className="logo">
                        {page.icon} {page.pageName}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
