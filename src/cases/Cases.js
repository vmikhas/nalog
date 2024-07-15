import parse from "html-react-parser";
import Picture from "../constants/Picture";

export default function Cases({ image, title, desc, text }) {
    return (
        <section className={"cases"}>
            <div className={"cases__container"}>
                <div className={"cases__inner"}>
                    <div className={"cases__image"}><Picture {...image} /></div>
                </div>
                <div className={"cases__wrapper"}>
                    <h2 className={"cases__title"}>{parse(title)}</h2>
                    <p className={"cases__desc"}>{parse(desc)}</p>
                </div>
                <p className={"cases__text"}>{parse(text)}</p>
            </div>
        </section>
    );
}