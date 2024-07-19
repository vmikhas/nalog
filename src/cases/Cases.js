import parse from "html-react-parser";
import Picture from "../constants/Picture";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Cases({ image, title, desc, tooltip, text }) {
	const [open, setOpen] = useState(false);

	return (
		<section className={"cases"}>
			<div className={"cases__container"}>
				<div className={"cases__inner"}>
					<div className={"cases__image"}><Picture {...image} /></div>
				</div>
				<div className={"cases__wrapper"}>
					<h2 className={"cases__title"}>{parse(title)}</h2>
					<p className={"cases__desc"}>{parse(desc)}
						<button className={`cases__tooltip ${open ? 'cases__tooltip_active' : ''}`}
							onClick={() => setOpen(!open)}
							aria-label={"Пояснение"}>
							<CSSTransition in={open} timeout={300} classNames={"cases__tooltip-text"} mountOnEnter unmountOnExit>
								<span className={`cases__tooltip-text`}>{parse(tooltip)}</span>
							</CSSTransition>
						</button>
					</p>
				</div>
				<p className={"cases__text"}>{parse(text)}</p>
			</div>
		</section>
	);
}