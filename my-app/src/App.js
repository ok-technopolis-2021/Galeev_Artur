import classes from "./App.module.css"

import RightPart from "./Components/RightPart/RigthPart"
import LeftPart from "./Components/LeftPart/LeftPart"

function App() {
    return (
        <div className={classes.App}>
            <LeftPart/>
            <RightPart/>
        </div>
    );
}

export default App;
