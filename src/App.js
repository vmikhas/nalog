import "./style.scss";

import Header from "./header/Header";
import Calculate from "./calculate/Calculate";
import Winnings from "./winnings/Winnings";
import Pay from "./pay/Pay";
import {calculateContent, headerContent, payContent, winningsContent} from "./constants/copyright";

function App() {
    return (
        <div className={"App"}>
            <Header {...headerContent} />
            <Calculate content={calculateContent} />
            <Winnings {...winningsContent} />
            <Pay {...payContent} />
        </div>
    );
}

export default App;
