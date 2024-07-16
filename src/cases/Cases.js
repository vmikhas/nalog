import parse from "html-react-parser";
import Picture from "../constants/Picture";
import { useState } from "react";

export default function Cases({ image, title, desc, tooltip, text }) {
	const [open, setOpen] = useState(false);
	const toggleTooltip = () => {
		setOpen(p => !p);
	};

    return (
        <section className={"cases"}>
            <div className={"cases__container"}>
                <div className={"cases__inner"}>
                    <div className={"cases__image"}><Picture {...image} /></div>
                </div>
                <div className={"cases__wrapper"}>
                    <h2 className={"cases__title"}>{parse(title)}</h2>
                    <p className={"cases__desc"}>{parse(desc)}
						<button class={`cases__tooltip ${open ? 'cases__tooltip_active' : ''}`}
								onClick={toggleTooltip}
								type={"button"} 
								aria-label={"Пояснение"}>
									<span className={`cases__tooltip-text ${open ? 'cases__tooltip-text_active' : ''}`}>{parse(tooltip)}</span>
						</button>
					</p>
                </div>
                <p className={"cases__text"}>{parse(text)}</p>
            </div>
        </section>
    );
}