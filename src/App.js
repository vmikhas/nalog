import "./style.scss";

import Header from "./header/Header";
import Calculate from "./calculate/Calculate";
import Winnings from "./winnings/Winnings";
import Pay from "./pay/Pay";
import Filling from "./filling/Filling";
import {calculateContent, fillingContent, headerContent, payContent, winningsContent} from "./constants/copyright";

function App() {
    return (
        <div className={"App"}>
            <Header {...headerContent} />
            <Calculate content={calculateContent} />
            <Winnings {...winningsContent} />
            <Pay {...payContent} />
						<Filling {...fillingContent} />
        </div>
    );
}

export default App;
