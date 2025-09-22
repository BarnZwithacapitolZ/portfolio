import { icon, oditi, oditiCollaborators, oditiProduct, oditiAR, studioOditi, studioOditiBrief, studioOditiDash, studioOditiForm,
	studioOditiLeaderboard, studioOditiProfile, studioOditiSubmission, rotaboard, rotaboardRating,
	rotaboardEmployees, rotaboardDash, transportHome, transportLevels, transportLevel, transportEditor, transportGraphics } from "./images";
import { css, html, js, ts, react, node, php, laravel, python, flask, graphql, wordpress, shopify, vscode, gcp, tailwind } from "./icons";
import transportIcon from "../assets/transportIcon.png";
import rotaboardIcon from "../assets/rotaboard.png";
import oditiBlackIcon from "../assets/oditi-black.png";
import oditiWhiteIcon from "../assets/oditi-white.png";

const INFO: any = {
	main: {
		title: "",
		name: "Sam Barnes",
		email: "barnes.samb@gmail.com",
		logo: icon,
	},
	socials: {
		github: "https://github.com/BarnZwithacapitolZ",
		gitlab: "https://gitlab.com/users/sc18sjb/projects",
		linkedin: "https://www.linkedin.com/in/sam-barnes-007389/",
		instagram: "https://instagram.com/sam_in_a_barn",
		email: "mailto:barnes.samb@gmail.com"
	},

	homepage: {
		title: "Hi, I'm Sam!",
		description: `
I'm a fullstack engineer based in London. I love creative challanges and taking ideas from the notepad to the ipad, turning ideas into scalable, user-friendly applications.
<br>
<br>
I specialise in building projects in <strong>React</strong> and <strong>Python</strong> but also have considerable experience in other languages such as PHP with frameworks like Laravel. I enjoy working in a fast, agile way, balancing clean, maintainable code with rapid delivery. Whether it's architecting the backend or database, crafting intuitive frontends, or deploying full solutions, I enjoy taking ownership across the entire development cycle.
<br>
<br>
Feel free to take a moment to browse my portfolio and see what i'm about. If you're interested in working together or just want to talk, feel free to reach out!
		`,
	},
	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "ODITI E-commerce store",
			description: `
ODITI is an E-commerce store built with Shopify to sell premium prints in collaboration with high-profile artists. ODITI was a pivot from the studio.oditi.com platform and a new market for the whole team.
<br>
<br>
I designed and built the entirety of the storefront using my own custom Shopify theme. I also setup a custom shop API which could be used to interact with different print-providers around the world,
automating the entier process from customer order, to shipping and order fulfillment. I also worked closely alongside co-founder and designer MILLINSKY (Alexandre Daillance) to ensure the site met the premium look and feel requirements.
`,
			logo: oditiBlackIcon,
			logoInvert: oditiWhiteIcon,
			link: "https://oditi.com",
			skills: ["JavaScript", "GraphQL", "Shopify", "Python", "FastAPI"],
			images: [oditi, oditiCollaborators, oditiProduct, oditiAR]
		},
		{
			title: "studio.oditi.com (PROSPECT 100)",
			description: `
studio.oditi.com (formerly PROSPECT 100) was a co-collaboration design platform I built from scratch with 1 other developer.
I was responsible and sole developer of the platforms frontend, as well as working on all other aspects of the platform including the Python backend, PostgreSQL database and GCP deployments.
<br />
<br />
The platform was built using ReactJS on the frontend and Flask on the backend. I worked closely alongside the co-founders of ODITI to bring their ideas to life within <strong>very</strong> short turnaround periods,
often a matter of days for major releases - there was a lot of all-night hackathon sessions! As a founding engineer I was also responsible for resolving any issues that would arise no matter the time, be it 4am or 4pm.
<br />
<br />
I worked on the platform over a period of 2 and a half years, growing it from a simple MVP to over <strong>100,000</strong> users and <strong>millions</strong> of page views. We worked alongside massive brands wuch as Swatch,
and artists such as Masego and Duran Duran, bringing their design ideas to life through co-collaboration!
			`,
				
			logo: "https://studio.oditi.com/static/media/prospect100icon.29fb2fdd8fd24d5a42e6.png",
			logoInvert: "https://studio.oditi.com/static/media/prospect100icon-inverted.d3e548d4a9c82a407278972ffe4d4f39.svg",
			link: "https://studio.oditi.com",
			skills: ["JavaScript", "TypeScript", "ReactJS", "PostgreSQL", "Python", "Flask"],
			images: [studioOditi, studioOditiSubmission, studioOditiBrief, studioOditiDash, studioOditiForm, studioOditiProfile, studioOditiLeaderboard]

		},
		{
			title: "Rotaboard",
			description: `
Rotaboard was built to allow small companies, especially ones hiring zero-hour-contracters to schedule employee shifts effortlessly. The application uses custom matching algorithms to learn an employees favourite shift patterns based on feedback allowing, over time, the ideal shifts to be matched to each employee.
<br>
<br>
The idea to develop Rotaboard came about whilst I was working at a corner shop where they used paper rotas which were manually created every week, often matching undesirable shifts to employees.
Speaking to others, this seemed to be a common problem with zero-hour-contract style jobs. Eventually, I was given the chance to create Rotaboard as a dissertation project at University, and the project evolved from there.
<br>
<br>
The application was built using a PHP backend with Laravel and a ReactJS frontend. This was my first time using React for a large-scale project and a lot was learnt on how to properly structure and write maintainable, scaleable code.
			`,
			logo: rotaboardIcon,
			logoInvert: rotaboardIcon,
			link: "https://rotaboard.co.uk",
			skills: ["PHP", "laravel", "MySQL", "JavaScript", "ReactJS", "Python"],
			images: [rotaboard, rotaboardRating, rotaboardEmployees, rotaboardDash]

		},
		// {
		// 	title: "Train Time Traffic Light",
		// 	description:
		// 		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		// 	link: "https://github.com",
		// 	skills: ["Python"],
		// 	images: ["/test.png", "/crappy.jpg", "/test.png"]

		// },
		{
			title: "Transport The Public",
			description: `
Transport The Public is a short game I made in Python (interesting choice for game development I know).
The game combines my love for public transport with my love for gaming, where the aim of the game is to transport people from one destination to another using different forms of Public Transport.
The game includes multiple countries, each with their own levels meant to represent the tansit systems of different cities in each respective country. There was a progression system to unlock levels with keys, earned by their ranking after completing a level, as well as a custom map builder.
<br>
<br>
This was my first large-scale Python project and one of the first times putting OOP principles into practice; there was definitely a lot of lessions learnt, such as properly structuring code into modules for ease of scaleability, as well as not getting bogged-down by feature-creep.
			`,
			logo: transportIcon,
			logoInvert: transportIcon,
			link: "https://github.com/BarnZwithacapitolZ/Travel-Game",
			skills: ["Python"],
			images: [transportHome, transportLevel, transportLevels, transportEditor, transportGraphics]

		},
	],
	skills: {
		frontend: {
			name: "Frontend Developer",
			description: "I like to create beautiful UIs from scratch, and tailor amazing user experiences.",
			list: [
				{
					name: "CSS",
					icon: css
				},
				{
					name: "HTML",
					icon: html
				},
				{
					name: "JavaScript",
					icon: js
				},
				{
					name: "TypeScript",
					icon: ts
				},
				{
					name: "ReactJS",
					icon: react
				},
				{
					name: "Tailwind",
					icon: tailwind
				}
			]
		},
		backend: {
			name: "Backend Developer",
			description: "I can create advanced APIs to suit the project requirements and integrate with large databases.",
			list: [
				{
					name: "NodeJS",
					icon: node
				},
				{
					name: "PHP",
					icon: php
				},
				{
					name: "Laravel",
					icon: laravel
				},
				{
					name: "Python",
					icon: python
				},
				{
					name: "Flask",
					icon: flask
				},
				{
					name: "GraphQL",
					icon: graphql
				}
			]	
		},
		platform: {
			name: "Platform & Cloud",
			description: "I can deploy a site or API so that users around the world can experience it!",
			list: [
				{
					name: "WordPress",
					icon: wordpress
				},
				{
					name: "Shopify",
					icon: shopify
				},
				
				{
					name: "VS Code",
					icon: vscode
				},
				{
					name: "Google Cloud Platform",
					icon: gcp
				}
			]
		}
	}
};

export default INFO;
