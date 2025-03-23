import "./Card.css";
import { FaPhone, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Card() {
  return (
    <div className="info-card">
      <div className="profile-header">
        <img src="/assets/images/profile.jpg" alt="Profile" className="profile-pic" />
      </div>

      <div className="card-content">
        <h2 className= "contact-name">Arian Khan</h2>
        <h3 className = "contact-deg">Mechatronics Engineer</h3>

        <div className="contact-info">
          <div className="info">
            <FaPhone className="icon" />
            <span className="information">647-395-0355</span>
          </div>
          <div className="info">
            <FaEnvelope className="icon" />
            <span className="information" >as8khan@uwaterloo.ca</span>
          </div>

          
          <div className="socials">
            <p>Socials:</p>
            <a href="https://www.linkedin.com/in/ariansadatkhan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon social-icon" />
            </a>
            <a href="https://github.com/arian-gif" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
