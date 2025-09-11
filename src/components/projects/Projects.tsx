import { useState } from "react";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import { useDisclosure } from "@heroui/react";

import INFO from "../../data/user";

type ProjectProps = {
    logo: string,
    title: string,
    // description: string,
    linkText: string,
    link: string
}

const Projects = () => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure()
	const [project, setProject] = useState<ProjectProps>({} as any);


	return (
		<>
			<div className="flex flex-wrap items-stretch overflow-hidden">
				{INFO.projects.map((project: ProjectProps, index: number) => (
					<div className="overflow-hidden p-2 w-1/2 md:w-1/3" key={index}>
						<Project
							project={project}
							onOpen={(project) => { onOpen(); setProject(project) }}
						/>
					</div>
				))}
			</div>

			<ProjectModal isOpen={isOpen} onOpenChange={onOpenChange} project={project} />
		</>
	);
};

export default Projects;
