import "./style.scss";

import Header from "./header/Header";
import Calculate from "./calculate/Calculate";
import {calculateContent, headerContent} from "./constants/copyright";

function App() {
    return (
        <div className={"App"}>
            <Header {...headerContent} />
            <Calculate content={calculateContent} />
        </div>
    );
}

export default App;
