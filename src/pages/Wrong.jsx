import { useNavigate } from 'react-router-dom';
import './Wrong.css';

function Wrong(){
    const navigate = useNavigate(); 
    return (
        <>
            <div className="flex-row">
                <img src= "/assets/images/vecteezy_emoji_36629872.svg"/>
                <div className="flex-column">
                    <h1 id = "404">Sorry Not Found</h1>
                    <h2 id = "404">Error 404 not found</h2>
                    <button onClick={() => navigate('/')}>
                        Home
                    </button>
                </div>
            </div>
        </>
    );
}

export default Wrong;