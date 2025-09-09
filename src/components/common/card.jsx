import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ icon, title, body }) => {
	return (
		<div className="rounded-2xl outline-[#f4f4f5] outline-2 mix-blend-normal">
			<div className="p-8 pb-2">
				<div className="flex items-center">
					<div className="text-base text-(color:--tertiary-color)">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="text-sm pl-4 font-bold text-(color:--secondary-color)">{title}</div>
				</div>
				<div className="text-base pt-10">
					<div className="">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
