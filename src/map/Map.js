import Picture from "../constants/Picture";

export default function Map({ title, desc, image }) {
    return (
        <section className={"map"}>
            <div className={"map__container"}>
                <h2 className={"map__title"}>{title}</h2>
                <p className={"map__desc"}>{desc}</p>
                <div className={"map__image"}>
                    <Picture {...image} />
                </div>
            </div>
        </section>
    );
}