import React, { useState } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
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
				<Section name="home" className="mt-14 md:mt-[130px] gap-4" onChange={setActive}>
					<h1 className="font-bold font-(family-name:--secondary-font) text-5xl">Sam Barnes</h1>

					<span className="font-bold text-xl mb-6">Full Stack Engineer from London, UK</span>

					<img src={INFO.main.logo} alt="logo" className="rounded-full size-40 mb-6"  />

					<a 
						href="https://www.linkedin.com/in/sam-barnes-007389/"
						target="_blank"
						rel="noreferrer"
						className="border border-(color:--link-color) text-(color:--link-color) rounded-4xl px-6 py-2 inline-block font-bold text-lg"
					>
						<FontAwesomeIcon icon={faLinkedin} className="mr-2" />
						Connect
					</a>
				</Section>

				<Section name="about" classNames={{
					wrapper: "bg-(color:--link-color) text-white py-30 text-center mb-80",
					base: "mb-0"
				}} onChange={setActive}>
					<div className="w-[60%] flex flex-col gap-6">
						<h1 className="font-bold font-(family-name:--secondary-font) text-5xl">Hi, I'm Sam!</h1>

						<span className="font-bold text-lg mb-20">{INFO.homepage.description}</span>
					</div>

					<div className="flex text-black absolute top-full bg-white rounded-3xl text-center shadow-[0_5px_5px_0_rgba(233,240,243,0.5),0_0_0_1px_#E6ECF8] w-4/5">
						<div className="w-1/3 flex flex-col items-center border-r border-[#E6ECF8] py-10 px-4 gap-6">
							<FontAwesomeIcon icon={faMobileScreen} />

							<h1 className="font-bold font-(family-name:--secondary-font) text-2xl">Fontend Developer</h1>

							<div className="flex gap-8 flex-wrap items-center justify-center w-2/3">
								{INFO.skills.frontend.map((skill) => (
									<img src={skill.icon} className="w-12 h-12" />
								))}
							</div>
						</div>
						<div className="w-1/3 flex flex-col  items-center border-r border-[#E6ECF8] py-10 px-4 gap-6">
							<FontAwesomeIcon icon={faCode} />

							<h1 className="font-bold font-(family-name:--secondary-font) text-2xl">Backend Developer</h1>

							<div className="flex gap-8 flex-wrap items-center justify-center w-2/3">
								{INFO.skills.backend.map((skill) => (
									<img src={skill.icon} className="w-12 h-12" />
								))}
							</div>
						</div>
						<div className="w-1/3 flex flex-col items-center py-10 px-4 gap-6">
							<FontAwesomeIcon icon={faCloud} />

							<h1 className="font-bold font-(family-name:--secondary-font) text-2xl">Platform & Cloud</h1>

							<div className="flex gap-8 flex-wrap items-center justify-center w-2/3">
								{INFO.skills.platform.map((skill) => (
									<img src={skill.icon} className="w-12 h-12" />
								))}
							</div>
						</div>
					</div>
				</Section>

				<Section name="projects" onChange={setActive}>
					<h1 className="font-bold font-(family-name:--secondary-font) text-5xl">My Portfolio</h1>
					
					<Projects />
				</Section>

			</div>

			<Footer />

		</React.Fragment>
	);
};

export default App;
