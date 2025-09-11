import React, { useState } from "react";

import { faLink, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faMobileScreen, faCode } from "@fortawesome/free-solid-svg-icons";
import Helmet from "react-helmet"

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/projects/Projects";
import Section from "./components/Section";
import Skill from "./components/Skill";

import INFO from "./data/user";

import "./app.css";

type ActiveState = {
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
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies."} />
				<meta
					name="keywords"
					content={["Tharindu", "Tharindu N", "Tharindu Nayanajith"].join(", ")}
				/>
			</Helmet>

			<NavBar active={active} />

			<div className="flex flex-col">
				<Section name="home" className="mt-20 md:mt-[130px] gap-4" onChange={setActive}>
					<h1 className="font-bold font-(family-name:--secondary-font) text-5xl">Sam Barnes</h1>

					<span className="font-bold text-xl mb-6">Full Stack Engineer from London, UK</span>

					<img src={INFO.main.logo} alt="logo" className="rounded-full size-40 mb-6"  />

					<a 
						href="https://www.linkedin.com/in/sam-barnes-007389/"
						target="_blank"
						rel="noreferrer"
						className="border-2 border-(color:--link-color) text-(color:--link-color) rounded-4xl px-6 py-2 inline-block font-bold text-lg"
					>
						<FontAwesomeIcon icon={faLinkedin} className="mr-2" />
						Connect
					</a>
				</Section>

				<Section name="about" classNames={{
					wrapper: "bg-(color:--link-color) text-white py-30 text-center",
					base: "!mb-0"
				}} onChange={setActive}>
					<div className="md:w-[60%] flex flex-col gap-6">
						<h1 className="font-bold font-(family-name:--secondary-font) text-3xl md:text-5xl">Hi, I'm Sam!</h1>

						<span className="text-xl mb-20">{INFO.homepage.description}</span>
					</div>
				</Section>

				<Section name="skills" onChange={setActive}>
					<div className="flex flex-col md:flex-row text-black relative -mt-30 top-full bg-white rounded-3xl text-center shadow-[0_5px_5px_0_rgba(233,240,243,0.5),0_0_0_1px_#E6ECF8] w-full md:w-4/5">
						<Skill name="frontend" icon={faMobileScreen} border />
						<Skill name="backend" icon={faCode} border />
						<Skill name="platform" icon={faCloud} />
					</div>
				</Section>

				<Section name="projects" onChange={setActive}>
					<h1 className="font-bold font-(family-name:--secondary-font) text-3xl md:text-5xl">My Portfolio</h1>
					<span className="text-xl mb-10">Projects I have worked on in my professional and personal career.</span>

					<Projects />
				</Section>


				<Section name="contact" classNames={{
					wrapper: "bg-(color:--link-color) text-white pt-30 pb-10 text-center mb-0",
					base: "!mb-0 gap-10"
				}} onChange={setActive}>
					<h1 className="font-bold font-(family-name:--secondary-font) text-5xl">Contact Me</h1>

					<div className="flex gap-4">
						<a>
							<FontAwesomeIcon icon={faGithub} className="!size-6 border-2 border-[#33e9d5] p-3 rounded-full" />
						</a>
						<FontAwesomeIcon icon={faInstagram} className="!size-6 border-2 border-[#33e9d5] p-3 rounded-full" />
						<FontAwesomeIcon icon={faLinkedin} className="!size-6 border-2 border-[#33e9d5] p-3 rounded-full" />
						<FontAwesomeIcon icon={faMailBulk} className="!size-6 border-2 border-[#33e9d5] p-3 rounded-full" />
					</div>

					<span className="text-xl">CV available on request!</span>
				</Section>
			</div>

			<Footer />

		</React.Fragment>
	);
};

export default App;
