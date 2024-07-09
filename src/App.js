import "./style.scss";

import Header from "./header/Header";
import {headerContent} from "./constants/copyright";

function App() {
  return (
    <div className={"App"}>
      <Header {...headerContent} />
    </div>
  );
}

export default App;
