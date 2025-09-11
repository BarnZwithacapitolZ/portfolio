import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tv } from "tailwind-variants";
import INFO from "../data/user";

type SkillProps = {
    name: string;
    icon: any;
    border?: boolean;
}

type SkillInfo = {
    name: string;
    description: string;
    list: {
        icon: string;
    }[];
}

const skill = tv({
    slots: {
        base: "w-full md:w-1/3 flex flex-col items-center py-10 px-4 gap-6",
        icon: "!size-10 bg-(color:--link-color) text-white rounded-full p-4",
        name: "font-bold font-(family-name:--secondary-font) text-2xl",
        description: "mb-4 text-base",
        list: "flex gap-8 flex-wrap items-center justify-center w-full md:w-4/5",
    },
    variants: {
        border: {
            true: {
                base: "border-b md:border-b-0 md:border-r border-[#E6ECF8]"
            }
        }
    }
});

const Skill = ({ name, icon, border = false }: SkillProps) => {
    const skillInfo: SkillInfo = INFO.skills[name];
    const { base, icon: iconClassName, name: nameClassName, description, list } = skill({ border })

    return (
        <div className={base()}>
            <FontAwesomeIcon icon={icon} className={iconClassName()} />

            <h1 className={nameClassName()}>{skillInfo.name}</h1>

            <span className={description()}>{skillInfo.description}</span>

            <div className={list()}>
                {skillInfo.list.map((skill, index: number) => (
                    <img src={skill.icon} key={index} className="w-12 h-12" />
                ))}
            </div>
        </div>
    );
}

export default Skill;