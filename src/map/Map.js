import { useState } from "react";
import { ReactComponent as MapImage } from "./../assest/images/map.svg"
import parse from "html-react-parser";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

export default function Map({ content }) {
	const [activeId, setActiveId] = useState(null);

	return (
		<section className={"map"}>
			<div className={"map__container"}>
				<h2 className={"map__title"}>{content.title}</h2>
				<p className={"map__desc"}>{parse(content.desc)}</p>
				<div className={"map__image"}>
					<MapImage className={classNames(`map__image-world`, { [`map__image-world_${activeId}`]: activeId !== null })} />
					<ul className={"map__list"}>
						{content.dots.map((dot, id) =>
							<li className={`map__item map__item_${id}`} key={"item-" + id}>
								<button className={`map__tooltip`} onClick={() => setActiveId(p => p === null ? id : null)}>{dot.icon}</button>
								<CSSTransition in={activeId === id} timeout={300} classNames={"map__tooltip-text"} mountOnEnter unmountOnExit>
									<span className={`map__tooltip-text map__tooltip-text_${id}`}>
										{parse(content[dot.type])}
									</span>
								</CSSTransition>
							</li>)}
					</ul>
				</div>
			</div>
		</section>
	);
}