import "./project.css";

type Project = {
    logo: string,
    title: string,
    // description: string,
    linkText: string,
    link: string
}

type ProjectProps = {
    project: Project,
    onOpen: Function
}

const Project = ({ project, onOpen }: ProjectProps) => {
	return (
        <div className="project cursor-pointer" onClick={() => onOpen(project)}>		
            <div className="project-container">
                <div className="project-logo">
                    <img src={project.logo} alt="logo" />
                </div>
                <div className="project-title">{project.title}</div>
                {/* <div className="project-description">{description}</div> */}

                <img src="../test.png" alt="" className="rounded-3xl" />
            </div>
        </div>
	);
};

export default Project;
