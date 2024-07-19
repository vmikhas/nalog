import { useState } from "react";
import Picture from "../constants/Picture";
import parse from "html-react-parser";
import { CSSTransition } from "react-transition-group";

export default function Filling({ image, button, title, desc, info, tooltip, subtitle, text, footnote }) {
	const [open, setOpen] = useState(false);

	return (
		<section className={"filling"}>
			<div className={"filling__container"}>
				<div className={"filling__inner"}>
					<div className={"filling__image"}><Picture {...image} /></div>
					<button className={"filling__button"} type={"button"}>{button}</button>
				</div>
				<div className={"filling__wrapper"}>
					<h2 className={"filling__title"}>{parse(title)}</h2>
					<p className={"filling__desc"}>{parse(desc)}</p>
					<p className={"filling__info"}>{parse(info)}
						<button className={`filling__tooltip ${open ? 'filling__tooltip_active' : ''}`}
							onClick={() => setOpen(!open)}
							type={"button"}
							aria-label={"Пояснение"}>
							<CSSTransition in={open} timeout={300} classNames={"filling__tooltip-text"} mountOnEnter unmountOnExit>
								<span className={`filling__tooltip-text`}>{parse(tooltip)}</span>
							</CSSTransition>
						</button>
					</p>
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