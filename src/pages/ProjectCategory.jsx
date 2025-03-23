import ".././spacer/spacer.css";
import spacer_style from ".././spacer/spacer";
import ProjectCard from "../components/ProjectCard";

function ProjectCategory(props) {
  return (
    <div>
      <div className ="wrapper"style={spacer_style}>
        <div className="spacer" />
        <ProjectCard 
          category={props.category}
          projects={props.projects}
          image={props.image}/>
        <div className="spacer" />
      </div>
    </div>
  );
}
export default ProjectCategory;