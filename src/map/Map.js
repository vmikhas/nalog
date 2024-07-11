import Picture from "../constants/Picture";
import parse from "html-react-parser";

export default function Map({title, desc, mapImage, mapIcon}) {
    return (
        <section className={"map"}>
            <div className={"map__container"}>
                <h2 className={"map__title"}>{title}</h2>
                <p className={"map__desc"}>{parse(desc)}</p>
                <div className={"map__image"}>
                    <Picture {...mapImage} />
                    <div className={"map__icon map__icon_usa"}>
                        <button className={"map__button"}
                                type={"button"}
                                aria-label={"Налоги в США"}><Picture {...mapIcon} /></button>
                    </div>
                    <div className={"map__icon map__icon_india"}>
                        <button className={"map__button"}
                                type={"button"}
                                aria-label={"Налоги в США"}><Picture {...mapIcon} /></button>
                    </div>
                    <div className={"map__icon map__icon_europe"}>
                        <button className={"map__button"}
                                type={"button"}
                                aria-label={"Налоги в США"}><Picture {...mapIcon} /></button>
                    </div>
                    <div className={"map__icon map__icon_russia"}>
                        <button className={"map__button"}
                                type={"button"}
                                aria-label={"Налоги в США"}><Picture {...mapIcon} /></button>
                    </div>
                    <div className={"map__icon map__icon_taiwan"}>
                        <button className={"map__button"}
                                type={"button"}
                                aria-label={"Налоги в США"}><Picture {...mapIcon} /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}