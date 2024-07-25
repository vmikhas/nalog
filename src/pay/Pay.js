import parse from "html-react-parser";
import Picture from "../constants/Picture";
import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function Pay({ content }) {
	const [active, setActive] = useState('one');

	return (
		<section className={"pay"}>
			<div className={"pay__container"}>
				<h2 className={"pay__title"}>{parse(content.title)}</h2>
				<div className={"pay__wrapper"}>
					<div className={"pay__box"}>
						<ul className={"pay__list"}>
							{content.paginations.map((pagination, id) =>
								<li className={"pay__item"} key={id}>
									<button className={`pay__button ${pagination.type === active ? 'pay__button_active' : ''}`}
										onClick={() => setActive(pagination.type)}
										aria-label={"Первая страница"}>{pagination.number}</button>
								</li>)}
						</ul>
						<SwitchTransition>
							<CSSTransition key={active} classNames={"pay__subtitle"} timeout={300}>
								{active ? <h3 className={"pay__subtitle"}>{content[active].subtitle}</h3> : <span />}
							</CSSTransition>
						</SwitchTransition>
						<SwitchTransition>
							<CSSTransition key={active} classNames={"pay__desc"} timeout={300}>
								{active ? <div className={"pay__desc"}>{parse(content[active].desc)}</div> : <p />}
							</CSSTransition>
						</SwitchTransition>
					</div>
					<div className={"pay__image"}>
						<Picture {...content.image} />
					</div>
				</div>
			</div>
		</section>
	);
}