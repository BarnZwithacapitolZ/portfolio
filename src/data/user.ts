import icon from "../assets/crappy.jpg";
import oditi from "../assets/portfolio/oditi.png";
import oditiCollaborators from "../assets/portfolio/oditi-collaborators.png"
import oditiProduct from "../assets/portfolio/oditi-product.png"
import oditiAR from "../assets/portfolio/oditi-ar.png";
import studioOditi from "../assets/portfolio/studio.oditi.com.png";
import rotaboard from "../assets/portfolio/rotaboard.png"
import rotaboardRating from "../assets/portfolio/rotaboard-rating.png"
import rotaboardEmployees from "../assets/portfolio/rotaboard-employees.png"
import rotaboardDash from "../assets/portfolio/rotaboard-dash.png"
import { css, html, js, ts, react, node, php, laravel, python, flask, graphql, wordpress, shopify, vscode } from "./icons";

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
		title: "Full-stack web developer, and amateur astronaut.",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Tharindu N. I live in Sri Lanka, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
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
			logo: "https://oditi.com/cdn/shop/files/WhatsApp_Image_2025-04-30_at_14.08.21_659aa17f_f7c00cf7-8394-475a-9207-e08d578f42d1.png?v=1746019671&width=180%20180w",
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
			link: "https://studio.oditi.com",
			skills: ["JavaScript", "TypeScript", "ReactJS", "PostgreSQL", "Python", "Flask"],
			images: [studioOditi, "/test.png", "/test.png"]

		},
		{
			title: "Rotaboard",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
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
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			link: "https://github.com",
			skills: ["Python"],
			images: ["/test.png", "/test.png", "/test.png"]

		},
	],
	skills: {
		frontend: {
			name: "Frontend Developer",
			description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
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
			]
		},
		backend: {
			name: "Backend Developer",
			description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
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
			description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
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
			]
		}
	}
};

export default INFO;
