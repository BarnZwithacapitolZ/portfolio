import React, { useState } from "react";
import { Element } from "react-scroll";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Modal, ModalContent, ModalBody, ModalHeader, useDisclosure } from "@heroui/modal";
import { InView } from "react-intersection-observer";

import Logo from "./components/Logo";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/projects/Projects";

import INFO from "./data/user";

import "./app.css";

interface ActiveState {
	home: boolean;
	about: boolean;
	projects: boolean;
	experience: boolean;
}


const App = () => {
	const [active, setActive] = useState<ActiveState>({
		"home": true,
		"about": false,
		"projects": false,
		"experience": false,
	});

	return (
		<React.Fragment>
			{/* <Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet> */}

			<div className="page-content">
				<NavBar active={active} />
				<div className="content-wrapper">
					<InView
						as="div"
						onChange={(inView: boolean) => setActive({ ...active, "home": inView})}
						threshold={0.2}
					>
						<Element name="home" className="flex flex-col md:flex-row justify-start items-center mt-14 md:mt-[100px] mb-6 gap-6 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-3xl p-4 h-auto md:h-34">
							<Logo />
							
							<div className="flex justify-between w-full flex-col md:flex-row gap-4">
								<div className="flex flex-col items-center md:items-start">
									<h1 className="font-bold font-(family-name:--secondary-font) text-3xl">Sam Barnes</h1>
									<h2>Software Engineer from London, UK</h2>

									<div className="mt-2 flex gap-5">
										<a
											href={INFO.socials.github}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faGithub}
												className="text-xl text-(color:--link-color)"
											/>
										</a>
								
										<a
											href={INFO.socials.instagram}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faInstagram}
												className="text-xl text-(color:--link-color)"
											/>
										</a>
										<a
											href={`mailto:${INFO.main.email}`}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faMailBulk}
												className="text-xl text-(color:--link-color)"
											/>
										</a>
									</div>
								</div>
								
								<div className="flex items-center justify-center">
									<a 
										href="https://www.linkedin.com/in/sam-barnes-007389/"
										target="_blank"
										rel="noreferrer"
										className="bg-(color:--link-color) text-white rounded-3xl px-4 py-2 inline-block font-bold"
									>
										<FontAwesomeIcon icon={faLinkedin} className="mr-2" />
										Connect
									</a>
								</div>
							</div>
						</Element>
					</InView>

					<div className="pt-6">
						<InView
							threshold={0.2}
							onChange={(inView: boolean) => setActive({ ...active, "about": inView})}
							as="div"
						>
							<Element 
								name="about"
								className="flex flex-col-reverse lg:flex-row items-center justify-between"
							>
								<div className="flex items-start flex-col">
									<div className="w-full lg:w-[85%] mt-6 lg:mt-0 text-3xl font-bold font-(family-name:--secondary-font) after:content-[''] after:block after:w-14 after:h-2 after:bg-(color:--link-color) after:rounded after:my-4">About Me</div>

									<div className="text-base text-(color:--secondary-color) pt-3">
										{INFO.homepage.description}
									</div>
								</div>
							</Element>
						</InView>
						
						<div className="flex w-2/3 mx-auto gap-12 flex-wrap mt-6">
							{INFO.skills.map((skill) => (
								<img src={skill.icon} className="w-12 h-12" />
							))}
						</div>

						{/* <InView
							threshold={0.2}
							onChange={(inView) => setActive({ ...active, "experience": inView})}							
							as="div"
						>
							<Element name="experience">
								<Works />
							</Element>
						</InView> */}

						<InView
							threshold={0.2}
							onChange={(inView: boolean) => setActive({ ...active, "projects": inView})}
							as="div"
							className="mt-18"
						>
							<Element name="projects">
								<div className="w-full lg:w-[85%] mt-6 lg:mt-0 text-3xl font-bold font-(family-name:--secondary-font) after:content-[''] after:block after:w-14 after:h-2 after:bg-(color:--link-color) after:rounded after:my-4">Portfolio</div>
								<Projects />
							</Element>
						</InView>

						{/* <InView
							threshold={0.2}
							onChange={(inView: boolean) => setActive({ ...active, "contact": inView})}
							as="div"
							className="mt-18"
						>
							<Element name="contact">
								<div className="w-full lg:w-[85%] mt-6 lg:mt-0 text-3xl font-bold font-(family-name:--secondary-font) after:content-[''] after:block after:w-14 after:h-2 after:bg-(color:--link-color) after:rounded after:my-4">Contact</div>
							</Element>
						</InView> */}



						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
