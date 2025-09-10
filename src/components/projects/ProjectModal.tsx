import { Modal, ModalContent, ModalBody, ModalHeader } from "@heroui/modal";
import { useState } from "react";

type ProjectProps = {
    logo: string,
    title: string
    description: string,
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
        <Modal size="5xl" onOpenChange={onOpenChange} isOpen={isOpen} className="rounded-3xl">
            <ModalContent className="p-4 h-4/5 max-w-6xl ">
                <ModalHeader className="pb-0">
                    <div className="w-full lg:w-[85%] mt-6 lg:mt-0 text-3xl font-bold font-(family-name:--secondary-font) after:content-[''] after:block after:w-14 after:h-2 after:bg-(color:--link-color) after:rounded after:my-4">{project.title}</div>
                </ModalHeader>

                <ModalBody className="flex flex-row h-1/2 gap-10">
                    <div className="overflow-y-scroll h-full w-2/8 pr-3">
                        {project.images.map((image: string, index: number) => (
                            <img 
                                src={image}
                                className="mb-4 rounded-lg aspect-3/2 w-full cursor-pointer object-cover"
                                key={index}
                                onClick={() => setSelectedImage(image)}
                            />  
                        ))}
                    </div>

                    <div className="w-6/8 overflow-y-scroll">
                        <img src={selectedImage || project.images[0]} className="w-1/2 aspect-3/2 mx-auto object-cover rounded-lg" />

                        <p className="text-sm text-(color:--secondary-color) pt-3">{project.description}</p>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ProjectModal;