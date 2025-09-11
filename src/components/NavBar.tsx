import React from "react";
import { Link } from "react-scroll";
import { tv } from "tailwind-variants";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItem = tv({
	base: "hover:text-(color:--link-color) hover:ease-in-out hover:transition-colors hover:duration-300 font-bold text-[80%] cursor-pointer",
	variants: {
		active: {
			true: "text-(color:--link-color)",
		}
	}
})

type ActiveState = {
	home: boolean;
	about: boolean;
	projects: boolean;
	experience: boolean
}

type NavBarProps = {
  active: ActiveState;
};

const NavBar = ({ active }: NavBarProps) => {
	const currentActive = Object.keys(active).find(key => active[key as keyof ActiveState] === true);

	return (
		<React.Fragment>
			<div className="m-0 flex justify-center items-center">
				<nav className="flex justify-center items-center fixed bottom-6 md:bottom-auto md:top-6 z-[30]">
					<div className="bg-white rounded-3xl pl-0 pr-0 w-xs h-10 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
						<ul className="flex pl-6 pr-6 w-full h-full justify-between items-center">
							<li className={navItem({ active: currentActive === "home" })}>
								<Link to="home" smooth duration={500} offset={-100}>Home</Link>
							</li>
							<li className={navItem({ active: currentActive === "about" })}>
								<Link to="about" smooth duration={500}>About</Link>
							</li>
							<li className={navItem({ active: currentActive === "projects" })}>
								<Link to="projects" smooth duration={500} >Portfolio</Link>
							</li>

							<li className={navItem({active: currentActive === "contact" })}>
								<Link to="contact" smooth duration={500}>Contact</Link>
							</li>

							<li>
								<FontAwesomeIcon icon={faMoon} />
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
