import { Modal, ModalContent, ModalBody, ModalHeader } from "@heroui/modal";
import React, { useState } from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


type ProjectProps = {
    logo: string,
    title: string
    description: string,
    link: string,
    images: string[],
    skills: string[],
}

type ProjectModalProps = {
    isOpen: boolean,
    onOpenChange: (open: boolean) => void,
    project: ProjectProps
}

type ListProps = React.ComponentProps<"ul"> & { children?: React.ReactNode };

const ListRenderer = ({ children }: ListProps) => {
    return (
        <ul className="list-inside list-disc">{children}</ul>
    )
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
            classNames={{
                wrapper: "overflow-hidden",
                base: "rounded-3xl"
            }}
            placement="center"
            scrollBehavior="inside"
        >
            <ModalContent className="p-4 h-9/10 max-h-auto md:h-4/5 max-w-6xl bg-(color:--content-color) text-(color:--secondary-color)">
                <ModalHeader className="pb-2 w-full justify-between gap-6">
                    <div className="ext-3xl font-bold font-(family-name:--secondary-font) after:content-[''] after:block after:w-14 after:h-2 after:bg-(color:--primary-color) after:rounded after:my-1">{project.title}</div>

                    <div>
                        <a 
                            className="border-2 border-(color:--primary-color) text-(color:--primary-color) rounded-4xl px-4 py-1 inline-block font-bold text-sm md:text-base text-nowrap dark:bg-(color:--primary-color) dark:text-white"
                            target="_blank"
    						rel="noreferrer"
                            href={project.link}
                        >
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2" />
                            View
                        </a>
                    </div>
                </ModalHeader>

                <ModalBody className="flex flex-col-reverse md:flex-row h-10 md:h-4/5 gap-10 justify-between pb-5">
                    <div className="overflow-x-scroll md:overflow-x-auto md:overflow-y-scroll h-1/5 md:h-full w-full md:w-2/8 pr-3 flex md:flex-col gap-4 ">
                        {project.images.map((image: string, index: number) => (
                            <img 
                                src={image}
                                className="rounded-lg aspect-3/2 w-full cursor-pointer object-cover"
                                key={index}
                                onClick={() => setSelectedImage(image)}
                            />  
                        ))}
                    </div>

                    <div className="w-full md:w-6/8 overflow-y-scroll flex flex-col gap-6">
                        <div className="sm:w-1/2 mx-auto flex justify-center">
                            <Zoom>
                                <img src={selectedImage || project.images[0]} className="max-h-[200px] aspect-3/2 object-cover rounded-lg" />
                            </Zoom>
                        </div>

                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{ ul: ListRenderer }}
                        >
                            {project.description}
                        </ReactMarkdown>

                        <div className="flex flex-wrap gap-2">
                            {project.skills.map(skill => (
                                <div className="bg-(color:--primary-color) rounded-2xl text-white px-2 py-1 ">{skill}</div>
                            ))}
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ProjectModal;