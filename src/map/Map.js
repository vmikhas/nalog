import { useState } from "react";
import Picture from "../constants/Picture";
import parse from "html-react-parser";

export default function Map({ content }) {
	const [open, setOpen] = useState();
	// const toggleTooltip = () => {
	// 	setOpen(p => !p);
	// };

    return (
        <section className={"map"}>
            <div className={"map__container"}>
                <h2 className={"map__title"}>{content.title}</h2>
                <p className={"map__desc"}>{parse(content.desc)}</p>
                <div className={"map__image"}>
                    <Picture {...content.mapImage} />
                    {/* <div className={"map__icon map__icon_usa"}>
                        <button className={"map__tooltip"}
								onClick={toggleTooltip}
                                type={"button"}
                                aria-label={"Налоги в США"}>{{type: usa}}</button>
						<span className={`map__tooltip-text ${open ? 'map__tooltip-text_active' : ''}`}>{parse(usa)}</span>
                    </div> */}
					<ul className={"map__list"}>
						{content.dots.map((dot, id) =>
							<li className={`map__item map__item_${id}`} key={"item-" + id}>
								<button className={`map__tooltip`}
										onClick={() => setOpen(dot.type)}
                                		type={"button"}>{dot.icon}</button>
								<span className={`map__tooltip-text ${dot.type === open ? 'map__tooltip-text_active' : ''}`}>{content[open]}</span>
							</li>)}
					</ul>
                </div>
            </div>
        </section>
    );
}