import Picture from "../constants/Picture";
import parse from "html-react-parser";

export default function Filling({ image, button, title, desc, info, subtitle, text, footnote }) {
	return (
		<section className={"filling"}>
			<div className={"filling__container"}>
				<div className={"filling__inner"}>
					<div className={"filling__image"}><Picture {...image} /></div>
					<button className={"filling__button"} type={"button"}>{button}</button>
				</div>
				<div className={"filling__wrapper"}>
					<h2 className={"filling__title"}>{title}</h2>
					<p className={"filling__desc"}>{parse(desc)}</p>
					<p className={"filling__info"}>{info}</p>
					<div className={"filling__box"}>
						<h3 className={"filling__subtitle"}>{subtitle.submit}</h3>
						<p className={"filling__text"}>{text.submit}</p>
					</div>
					<div className={"filling__box"}>
						<h3 className={"filling__subtitle"}>{subtitle.pay}</h3>
						<p className={"filling__text"}>{text.pay}</p>
					</div>
					<p className={"filling__footnote"}>{parse(footnote)}</p>
				</div>
			</div>
		</section>
	);
}