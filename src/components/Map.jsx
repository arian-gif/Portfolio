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
        
                    {event.proImage && (
                        <img 
                            className={`pro-image ${index % 2 === 0 ? 'pro-image-left' : 'pro-image-right'}`} 
                            src={event.proImage} 
                            alt={event.title} 
                        />
                    )}
                    
                    
                    <div className="text-box">
                        <h2>{event.title}</h2>
                        <div>
                            <small className="text-gray-500 block mt-1">
                                {event.role} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {event.date}
                            </small>
                        </div>

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
