import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Projects from '../pages/Projects.jsx';
import WorkExperience from '../pages/WorkExperience.jsx';
import Contact from '../pages/Contact.jsx';
import Wrong from '../pages/Wrong.jsx';
import ProjectCategory from '../pages/ProjectCategory.jsx';
import EngineeringResearchTemplate from '../pages/EngineeringResearchTemplate.jsx';
import files from '../data/projects.js';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> }, 
    ...files.map(file => {
        if (file.category === 'Engineering & Research') {
            return {
                path: file.route,
                element: <EngineeringResearchTemplate category={file.category} projects={file.projects} image={file.card_image} />
            };
        } else {
            return {
                path: file.route,
                element: <ProjectCategory category={file.category} projects={file.projects} image={file.card_image} />
            };
        }
    }),
    
    { path: "/work-experience", element: <WorkExperience /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Wrong /> },
];


export default routes;
