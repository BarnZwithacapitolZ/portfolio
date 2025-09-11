import { Modal, ModalContent, ModalBody, ModalHeader } from "@heroui/modal";
import { useState } from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectProps = {
    logo: string,
    title: string
    description: string,
    link: string,
    images: string[],
}

type ProjectModalProps = {
    isOpen: boolean,
    onOpenChange: (open: boolean) => void,
    project: ProjectProps
}

const ProjectModal = ({ isOpen, onOpenChange, project }: ProjectModalProps) => {
    const [selectedImage, setSelectedImage] = useState("");

    if (Object.keys(project).length === 0) return null;

    return (
        <Modal 
            size="5xl"
            onOpenChange={(open: boolean) => {
                onOpenChange(open);
                if (!open) setSelectedImage("")
            }}
            isOpen={isOpen}
            className="rounded-3xl"
            placement="center"
        >
            <ModalContent className="p-4 h-4/5 max-w-6xl ">
                <ModalHeader className="pb-0">
                    <div className="w-full lg:w-[85%] mt-6 lg:mt-0 text-3xl font-bold font-(family-name:--secondary-font) after:content-[''] after:block after:w-14 after:h-2 after:bg-(color:--link-color) after:rounded after:my-4">{project.title}</div>

                    <div>
                        <a 
                            className="border-2 border-(color:--link-color) text-(color:--link-color) rounded-4xl px-4 py-1 inline-block font-bold text-base"
                            target="_blank"
    						rel="noreferrer"
                            href={project.link}
                        >
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2" />
                            View Project
                        </a>
                    </div>
                </ModalHeader>

                <ModalBody className="flex flex-col-reverse md:flex-row h-1/2 gap-10">
                    <div className="overflow-x-scroll md:overflow-y-scroll h-2/8 md:h-full w-full md:w-2/8 pr-3 flex md:flex-col gap-4">
                        {project.images.map((image: string, index: number) => (
                            <img 
                                src={image}
                                className="rounded-lg aspect-3/2 w-full cursor-pointer object-cover"
                                key={index}
                                onClick={() => setSelectedImage(image)}
                            />  
                        ))}
                    </div>

                    <div className="w-full md:w-6/8 overflow-y-scroll">
                        <img src={selectedImage || project.images[0]} className="w-1/2 aspect-3/2 mx-auto object-cover rounded-lg" />

                        <p className="text-sm text-(color:--secondary-color) pt-3">{project.description}</p>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ProjectModal;