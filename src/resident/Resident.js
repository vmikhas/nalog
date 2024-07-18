import Picture from "../constants/Picture";
import parse from "html-react-parser";

export default function Resident({ title, desc, image }) {
	return (
		<section className={"resident"}>
			<div className={"resident__container"}>
				<div className={"resident__wrapper"}>
					<h2 className={"resident__title"}>{parse(title)}</h2>
					<p className={"resident__desc"}>{parse(desc)}</p>
				</div>
				<div className={"resident__inner"}>
					<div className={"resident__image"}><Picture {...image} /></div>
				</div>
			</div>
		</section>
	);
}