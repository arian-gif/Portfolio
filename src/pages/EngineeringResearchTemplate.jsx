import EngineeringResearchCard from "../components/EngineeringResearchCard";
import ".././spacer/spacer.css";
import spacer_style from ".././spacer/spacer";

function EngineeringResearchTemplate(props) {
return (
    <div>
        <div className="wrapper" style={spacer_style}>
            <div className="spacer" />
            <EngineeringResearchCard
                category={props.category}
                projects={props.projects}
                image={props.image}
            />
            <div className="spacer" />
        </div>
    </div>
);
}

export default EngineeringResearchTemplate;