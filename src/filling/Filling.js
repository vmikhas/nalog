export default function Filling({ title, desc, info, subtitle, text, footnote }) {
	return (
		<section className={"filling"}>
			<div className={"filling__container"}>
				<div className={"filling__image"}></div>
				<div className={"filling__wrapper"}>
					<h2 className={"filling__title"}>{title}</h2>
					<p className={"filling__desc"}>{desc}</p>
					<p className={"filling__info"}>{info}</p>
					<div className={"filling__box"}>
						<h3 className={"filling__subtitle"}>{subtitle.submit}</h3>
						<p className={"filling__text"}>{subtitle.pay}</p>
					</div>
					<div className={"filling__box"}>
						<h3 className={"filling__subtitle"}>{text.submit}</h3>
						<p className={"filling__text"}>{text.pay}</p>
					</div>
					<p className={"filling__footnote"}>{footnote}</p>
				</div>
			</div>
		</section>
	);
}