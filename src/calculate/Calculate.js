import parse from "html-react-parser";

export default function Calculate({ content }) {

    return (
        <section className={"calculate"}>
            <div className={"calculate__container"}>
                <div className={"calculate__wrapper"}>
                    <h2 className={"calculate__title"}>{content.calculateTitle}</h2>
                    <form className={"calculate__form"} action={"#"} method={"POST"}>
                        <input className={"calculate__input"}
                               type={"number"} name={"number"}
                               placeholder={"Введите сумму выигрыша"}
                               required
                        />
                        <button className={"calculate__button"} type={"button"}>{content.calculateButton}</button>
                    </form>
                    <dl className={"calculate__list"}>
                        <div className={"calculate__inner"}>
                            {content.calculateTerms.map((calculateTerm, id) =>
                                <dt className={`calculate__term calculate__term_${id}`} key={id}>{calculateTerm}</dt>)}
                        </div>
                        <div className={"calculate__inner"}>
                            {content.calculateDetails.map((calculateDetail, id) =>
                                <dd className={`calculate__desc calculate__desc_${id}`} key={id}>{calculateDetail}</dd>)}
                        </div>
                    </dl>
                    <div className={"calculate__box"}>
                        <div className={"calculate__carousel"}>
                            <h3 className={"calculate__term"}>{content.carouselTitle}</h3>
                            <ul className={"calculate__carousel-list"}>
                                {content.carouselItems.map((carouselItem, id) =>
                                    <li className={`calculate__carousel-item calculate__carousel-item_${id}`}
                                        key={"item-" + id}>
                                        <button className={"calculate__carousel-button"}
                                                type={"button"}>{carouselItem.number}</button>
                                    </li>)}
                            </ul>
                            <p className={"calculate__carousel-desc"}>{parse(content.carouselDesc.average.desc)}</p>
                        </div>
                        <p className={"calculate__footnote"}>{content.calculateFootnote}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}