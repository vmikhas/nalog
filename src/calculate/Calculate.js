import parse from "html-react-parser";
import Picture from "../constants/Picture";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { settings } from "../constants/carousel-settings";
import { CSSTransition, SwitchTransition } from "react-transition-group";


const calculateRate = (win) => {
	if (win <= 4000) return 0;
	else if (win >= 4001 && win <= 5000000) return 13;
	return 15;
};
const calculateTax = (win, percent) => {
	return Math.ceil((win * percent) / 100);
};
const calculateResult = (win, calculateTax) => {
	return Math.floor(win - calculateTax);
};


export default function Calculate({ content }) {
	const [active, setActive] = useState('average');

	const [doCalc, setDoCalc] = useState(false);
	const [win, setWin] = useState('placeholder');
	const [netWin, setNetWin] = useState(content.win);
	const [nalog, setNalog] = useState(content.tax);

	useEffect(() => {
		if (!doCalc) return;
		const percent = calculateRate(win);
		const tax = calculateTax(win, percent);
		const result = calculateResult(win, tax);

		setNetWin(result);
		setNalog(tax);
		setDoCalc(false);
	}, [doCalc, win]);

	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1023);

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 1023);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const deviceContent = useMemo(() => isWideScreen ? 'descD' : 'descM', [isWideScreen])

	return (
		<section className={"calculate"}>
			<div className={"calculate__container"}>
				<div className={"calculate__wrapper"}>
					<h2 className={"calculate__title"}>{content.title}</h2>
					<div className={"calculate__image"}><Picture {...content.image} /></div>
					<div className={"calculate__form"} >
						<input className={"calculate__input"} type={"number"} value={win} onChange={(e) => setWin(e.target.value)}
							name={"number"} min={"0"} placeholder={"Введите сумму выигрыша"} required />
						<button className={"calculate__button"} onClick={() => setDoCalc(true)}>{content.button}</button>
					</div>
					<div className={"calculate__list"}>
						<ul className={"calculate__inner"}>
							{content.terms.map((term, id) =>
								<li className={`calculate__term calculate__term_${id}`} key={id}>{term}</li>)}
						</ul>
						<div className={"calculate__result"}>
							<p className={"calculate__desc calculate__desc_win"}>{netWin} ₽</p>
							<p className={"calculate__desc calculate__desc_tax"}>{nalog} ₽</p>
						</div>
					</div>
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
													onClick={() => setActive(carouselItem.type)} type={"button"}>{carouselItem.number}</button>
											</li>
										</SwiperSlide>)}
								</ul>
							</Swiper>
							<SwitchTransition>
								<CSSTransition key={`${active}-${deviceContent}`} classNames={"calculate__carousel-desc"} timeout={300}>
									<p className={"calculate__carousel-desc"}>{parse(content[active][deviceContent])}</p>
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
