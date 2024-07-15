import parse from "html-react-parser";
import Picture from "../constants/Picture";
import { useState } from "react";

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
                                    <button className={"pay__button"}
                                        onClick={() => setActive(pagination.type)}
                                        aria-label={"Первая страница"}>{pagination.number}</button>
                                </li>)}
                        </ul>
                        <h3 className={"pay__subtitle"}>{content[active].subtitle}</h3>
                        <p className={"pay__desc"}>{parse(content[active].desc)}</p>
                    </div>
                    <div className={"pay__image"}>
                        <Picture {...content.image} />
                    </div>
                </div>
            </div>
        </section>
    );
}