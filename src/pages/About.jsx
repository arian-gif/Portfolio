import AboutCard from '../components/AboutCard';
import ".././spacer/spacer.css";
import spacer_style from ".././spacer/spacer";

function About(){
    const style = {
        backgroundImage: "url('/assets/images/nice-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        ...spacer_style
    };
    return (
        <>      
            <div className="wrapper" style={style}>
                <div className="spacer" />
                <AboutCard />
                <div className="spacer" />
            </div>
        </>
    );
}
export default About;