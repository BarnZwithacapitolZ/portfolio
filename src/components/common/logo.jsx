import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { tv } from "tailwind-variants";
import useWindowSize from "../../hooks/useWindowSize";

import INFO from "../../data/user";

const logo = tv({
	base: "flex relative top-auto z-[999] rounded-none shadow-none",
	variants: {
		stay: {
			true: "fixed top-[3vh] border-2 border-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] cursor-pointer",
		}
	}
})

const LOGOSIZE = 100;

const Logo = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(LOGOSIZE);
	const [oldLogoSize, setOldLogoSize] = useState(LOGOSIZE);
	const [width] = useWindowSize();

	const incrementor = width < 768 ? 14 : 5;

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = LOGOSIZE - (scroll * incrementor) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize, incrementor]);


	return (
		<div className={logo({ stay: stayLogo })}>
			<Link to="home" smooth duration={500} offset={-100}>
				<img src={INFO.main.logo} alt="logo" className="rounded-full" width={logoSize} />
			</Link>
		</div>
	);
};

export default Logo;
