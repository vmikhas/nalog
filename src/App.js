import "./style.scss";

import Header from "./header/Header";
import Calculate from "./calculate/Calculate";
import Winnings from "./winnings/Winnings";
import {calculateContent, headerContent, winningsContent} from "./constants/copyright";

function App() {
    return (
        <div className={"App"}>
            <Header {...headerContent} />
            <Calculate content={calculateContent} />
            <Winnings {...winningsContent} />
        </div>
    );
}

export default App;
