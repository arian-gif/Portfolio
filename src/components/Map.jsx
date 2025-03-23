import events from '../data/events.js';
import './Map.css';

function Map() {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div 
                    key={index} 
                    className={`container ${index % 2 === 0 ? 'left-container' : 'right-container'}`}
                >
                    {/* Professional Image Positioned Absolutely */}
                    <img 
                        className={`pro-image ${index % 2 === 0 ? 'pro-image-left' : 'pro-image-right'}`} 
                        src={event.proImage} 
                        alt={event.title} 
                    />
                    
                    <div className="text-box">
                        <h2>{event.title}</h2>
                        <small>{event.date}</small>
                        <p>{event.description}</p>
                        <span className={`${index % 2 === 0 ? 'left-container' : 'right-container'}-arrow`} />
                    </div>
                    
                    <img className="company" src={event.image} alt={event.title} />
                </div>
            ))}
        </div>
    );
}

export default Map;
