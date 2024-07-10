import parse from "html-react-parser";
import Picture from "../constants/Picture";

export default function Winnings({ title, text, items, link, image}) {
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
                <ul className={"winnings__list"}>
                    <li className={"winnings__item"}>{parse(items.currency)}</li>
                    <li className={"winnings__item"}>{parse(items.deduction)}</li>
                    <li className={"winnings__item"}>{parse(items.message)}
                        <a className={"winnings__link"} href={"#1"}>{link}</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
