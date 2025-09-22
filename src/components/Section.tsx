import React from "react";
import { InView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { twMerge } from "tailwind-merge";

interface ActiveState {
	home: boolean;
	about: boolean;
	projects: boolean;
	experience: boolean;
}

type SectionProps = {
    name?: string,
    className?: string,
    classNames?: {
        wrapper?: string,
        base?: string
    },
    onChange: React.Dispatch<React.SetStateAction<ActiveState>>;
    children: React.ReactNode
}

const Section = ({ name = "", className = "", classNames = {}, onChange, children }: SectionProps) => {
    return (
        <InView
            as="div"
            onChange={(inView: boolean) => onChange((prev) => ({ ...prev, [name]: inView}))}
            threshold={0.2}
            data-slot="wrapper"
            className={twMerge("bg-(color:--tertiary-color) text-(color:--secondary-color)", classNames.wrapper)}
        >
            <Element 
                name={name}
                className={twMerge("max-w-[1344px] mx-auto px-[2rem] md:px-[3rem] flex flex-col gap-6 items-center justify-center mb-20 relative text-center", className, classNames.base)}
                data-slot="base"
            >
                {children}
            </Element>
        </InView>
    )
}

export default Section;