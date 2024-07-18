import parse from "html-react-parser";
import Picture from "../constants/Picture";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { options } from "../constants/carousel-settings";

export default function Winnings({ title, text, items, image }) {
	return (
		<section className={"winnings"}>
			<div className={"winnings__container"}>
				<div className={"winnings__wrapper"}>
					<div className={"winnings__image"}><Picture {...image} /></div>
					<div className={"winnings__inner"}>
						<h2 className={"winnings__title"}>{title}</h2>
						<p className={"winnings__text"}>{text}</p>
					</div>
				</div>
				<Swiper {...options.winning}>
					<ul className={"winnings__list"}>
						{items.map((item, id) =>
							<SwiperSlide key={id}>
								<li className={`winnings__item winnings__item_${id}`}>
									{parse(item)}
								</li>
							</SwiperSlide>)}
					</ul>
				</Swiper>
			</div>
		</section>
	);
}
