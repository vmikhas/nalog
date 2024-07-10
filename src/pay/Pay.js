import parse from "html-react-parser";

export default function Pay({ title, paginations, subtitle, desc }) {
    return (
        <section className={"pay"}>
            <div className={"pay__container"}>
                <h2 className={"pay__title"}>{title}</h2>
                <div className={"pay__wrapper"}>
                    <div className={"pay__box"}>
                        <ul className={"pay__list"}>
                            {paginations.map((pagination, id) =>
                                <li className={"pay__item"} key={id}>
                                    <a className={"pay__button"}
                                       href={"#1"}
                                       aria-label={"Первая страница"}>{pagination.number}</a>
                                </li>)}
                        </ul>
                        <h3 className={"pay__subtitle"}>{subtitle}</h3>
                        <p className={"pay__desc"}>{parse(desc.write)}</p>
                    </div>
                    <div className={"pay__image"}></div>
                </div>
            </div>
        </section>
    );
}