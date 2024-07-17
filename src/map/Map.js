import { useState } from "react";
import {ReactComponent as MapImage} from "./../assest/images/map.svg"
import parse from "html-react-parser";

export default function Map({ content }) {
	const [open, setOpen] = useState(false);
	const buttonCLick = (type) => {
		if(open === type) setOpen(false);
		else setOpen(type);
	};
	
    return (
        <section className={"map"}>
            <div className={"map__container"}>
                <h2 className={"map__title"}>{content.title}</h2>
                <p className={"map__desc"}>{parse(content.desc)}</p>
                <div className={"map__image"}>
                    <MapImage />
					<ul className={"map__list"}>
						{content.dots.map((dot, id) =>
							<li className={`map__item map__item_${id}`} key={"item-" + id}>
								<button className={`map__tooltip`}
										onClick={() => buttonCLick(dot.type)}
                                		type={"button"}>{dot.icon}</button>
								{open && <span className={`map__tooltip-text map__tooltip-text_${id} ${dot.type === open ? 'map__tooltip-text_active' : ''}`}>{parse(content[open])}</span>}
							</li>)}
					</ul>
                </div>
            </div>
        </section>
    );
}