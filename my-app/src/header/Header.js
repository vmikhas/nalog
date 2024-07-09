import Picture from "../constants/Picture";

export default function Header({ headerTitle, headerDesc, imageLogo }) {
    return (
        <header className={"header"}>
            <div className={"header__container"}>
                <div className={"header__logo"}>
                    {/*<Picture imgAttr={imageLogo.imgAttr}/> разложенный вариант*/}
                    <Picture {...imageLogo}/>
                </div>
                <h1 className={"header__title"}>{headerTitle}</h1>
                <p className={"header__desc"}>{headerDesc}</p>
            </div>
        </header>
    );
};