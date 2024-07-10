import parse from "html-react-parser";
import Picture from "../constants/Picture";

export default function Header({ headerTitle, headerDesc, imageLogo }) {
    return (
        <header className={"header"}>
            <div className={"header__container"}>
                <a className={"header__logo"} href={"index.html"}>
                    {/*<Picture imgAttr={imageLogo.imgAttr}/> разложенный вариант*/}
                    <Picture {...imageLogo}/>
                </a>
                <h1 className={"header__title"}>{headerTitle}</h1>
                <p className={"header__desc"}>{parse(headerDesc)}</p>
            </div>
        </header>
    );
};