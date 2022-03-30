import "./Styles/App.css";

import Header from "./Components/Header";
import Entry from "./Components/Entry";

import { Data } from "./Data";

function App() {
    const entries = Data.map((entry) => {
        return <Entry {...entry} />;
    });

    return (
        <div className="App">
            <Header />
            <div className="Entries">{entries}</div>
        </div>
    );
}

export default App;
