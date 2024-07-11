import "./style.scss";

import Header from "./header/Header";
import Calculate from "./calculate/Calculate";
import Winnings from "./winnings/Winnings";
import Pay from "./pay/Pay";
import Filling from "./filling/Filling";
import Resident from "./resident/Resident";
import Cases from "./cases/Cases";
import Map from "./map/Map";
import {
    calculateContent, casesContent,
    fillingContent,
    headerContent, mapContent,
    payContent,
    residentContent,
    winningsContent
} from "./constants/copyright";

function App() {
    return (
        <div className={"App"}>
            <Header {...headerContent} />
            <Calculate content={calculateContent} />
            <Winnings {...winningsContent} />
            <Pay {...payContent} />
            <Filling {...fillingContent} />
            <Resident {...residentContent} />
            <Cases {...casesContent} />
            <Map {...mapContent} />
        </div>
    );
}

export default App;
