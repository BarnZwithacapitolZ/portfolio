import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type Project = {
    logo: string;
    title: string;
    images: string[];
    link: string;
}

type ProjectProps = {
    project: Project,
    onOpen: Function
}

const Project = ({ project, onOpen }: ProjectProps) => {
	return (
        <div className="text-start rounded-3xl h-full cursor-pointer hover:bg-(color:--link-color)/50 transition-all ease-in-out duration-[0.3s]  shadow-[0_2px_10px_rgba(0,0,0,0.1)] shadow-(color:--link-color)/25" onClick={() => onOpen(project)}>		
            <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex w-full justify-between border-b border-[#E6ECF8] pb-4">
                    <div className="size-10 flex items-center justify-center">
                        <img src={project.logo} alt="logo" />
                    </div>

                    <div className="">
                        <a 
                            className="bg-(color:--link-color) rounded-full p-2 text-white aspect-square flex"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={e => e.stopPropagation()}
                        >
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="!size-4" />
                        </a>
                    </div>
                </div>
                <div className="font-bold font-(family-name:--secondary-font) text-xl py-4">{project.title}</div>

                <img src={project.images[0]} alt="" className="rounded-3xl aspect-3/2 w-full cursor-pointer object-cover" />
            </div>
        </div>
	);
};

export default Project;
