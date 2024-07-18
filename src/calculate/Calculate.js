import parse from "html-react-parser";
import Picture from "../constants/Picture";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { settings } from "../constants/carousel-settings";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function Calculate({ content }) {
	const [active, setActive] = useState('average');

	// const calculateTax = (number, tax) => {
	// };

	return (
		<section className={"calculate"}>
			<div className={"calculate__container"}>
				<div className={"calculate__wrapper"}>
					<h2 className={"calculate__title"}>{content.title}</h2>
					<div className={"calculate__image"}><Picture {...content.image} /></div>
					<form className={"calculate__form"} action={"#"} method={"POST"}>
						<input className={"calculate__input"} type={"number"} min={"0"} name={"number"} placeholder={"Введите сумму выигрыша"} required />
						<button className={"calculate__button"} type={"button"}>{content.button}</button>
					</form>
					<dl className={"calculate__list"}>
						<div className={"calculate__inner"}>
							{content.terms.map((term, id) =>
								<dt className={`calculate__term calculate__term_${id}`} key={id}>{term}</dt>)}
						</div>
						<div className={"calculate__inner"}>
							{content.details.map((detail, id) =>
								<dd className={`calculate__desc calculate__desc_${id}`} key={id}>{detail}</dd>)}
						</div>
					</dl>
					<div className={"calculate__box"}>
						<div className={"calculate__carousel"}>
							<h3 className={"calculate__term"}>{content.carouselTitle}</h3>
							<Swiper	{...settings.calculate}>
								<ul className={"calculate__carousel-list"}>
									{content.carouselItems.map((carouselItem, id) =>
										<SwiperSlide key={id}>
											<li className={`calculate__carousel-item calculate__carousel-item_${id}`}
												key={"item-" + id}>
												<button className={`calculate__carousel-button ${carouselItem.type === active ? 'calculate__carousel-button_active' : ''}`}
													onClick={() => setActive(carouselItem.type)}
													type={"button"}>{carouselItem.number}</button>
											</li>
										</SwiperSlide>)}
								</ul>
							</Swiper>
							<SwitchTransition>
								<CSSTransition key={active} classNames={"calculate__carousel-desc"} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
									{active ? <p className={"calculate__carousel-desc"}>{parse(content[active].desc)}</p> : <p />}
								</CSSTransition>
							</SwitchTransition>
						</div>
						<p className={"calculate__footnote"}>{content.calculateFootnote}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
