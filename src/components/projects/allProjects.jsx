import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="flex flex-wrap items-stretch -mx-10">
			{INFO.projects.map((project, index) => (
				<div className="overflow-hidden p-2 w-1/2 md:w-1/3" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
