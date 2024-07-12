import parse from "html-react-parser";
import Picture from "../constants/Picture";

export default function Header({ title, desc, logo }) {
    return (
        <header className={"header"}>
            <div className={"header__container"}>
                <a className={"header__logo"} href={"index.html"}>
                    {/*<Picture imgAttr={imageLogo.imgAttr}/> разложенный вариант*/}
                    <Picture {...logo}/>
                </a>
                <h1 className={"header__title"}>{title}</h1>
                <p className={"header__desc"}>{parse(desc)}</p>
            </div>
        </header>
    );
};