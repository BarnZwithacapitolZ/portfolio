import { useState } from "react";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import { useDisclosure } from "@heroui/react";

import INFO from "../../data/user";

type ProjectProps = {
    logo: string;
	logoInvert: string;
    title: string;
	images: string[];
    description: string;
	link: string;
	skills: string[];
}

const Projects = () => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure()
	const [project, setProject] = useState<ProjectProps>({} as any);

	return (
		<>
			<div className="flex flex-wrap items-stretch">
				{INFO.projects.map((project: ProjectProps, index: number) => (
					<div className="overflow-contain py-4 sm:px-4 w-full sm:w-1/2 lg:w-1/3" key={index}>
						<Project
							project={project}
							onOpen={(project: ProjectProps) => { onOpen(); setProject(project) }}
						/>
					</div>
				))}
			</div>

			<ProjectModal isOpen={isOpen} onOpenChange={onOpenChange} project={project} />
		</>
	);
};

export default Projects;
