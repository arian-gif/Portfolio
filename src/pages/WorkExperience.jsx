import Map from '../components/Map';
import "../spacer/spacer.css";
import spacer_style from "../spacer/spacer";

function WorkExperience() {
    return (
        <>
            <div className="wrapper" style={spacer_style}>
                <div className="spacer" />
                <Map />
                <div className="spacer" />
            </div>
        </>
    );
}

export default WorkExperience;
