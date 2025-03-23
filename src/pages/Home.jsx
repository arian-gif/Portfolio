import "./Home.css";
import ".././spacer/spacer.css";
import spacer_style from ".././spacer/spacer";
import { Link } from "react-router-dom";

function Home() {
    
    return (
        <>
            <div className="wrapper" style={spacer_style}>
                <div className="spacer" />
                <div className="opening">
                    <div className="home">

                        <p className="intro">My name is</p>
                        <h1 className="name">Arian Khan</h1>
                        <h2 className="build">I build cool stuff</h2>
                        <p className="description">
                            Hey, I’m a Mechatronics Engineering student at the University of Waterloo. 
                            I build both software and hardware, basically, if it runs on code or bolts, 
                            I’ve probably broken it at least once. 😎 Feel free to dig into my technical background 
                            or just get to know me (I promise I'm interesting).
                        </p>
                        <div className="buttons">
                            <Link to="/about" className="primaryButton">Get to know me</Link>
                            <Link to="/projects" className="secondaryButton">My projects</Link>
                        </div>
                    </div>
                    <div className= "homeImg">
                        <img src="/assets/images/avatar.png" alt="Arian Khan" className= "avatar"/>
                    </div>
                </div>
                <div className="spacer" />
            </div>
        </>
    );
}

export default Home;
