import Alert from "./components/Alert";
import Button from "./components/Button";
import React from "react";

function App() {
    return (
        <div>
            <Button color="danger" onClick={() => console.log('Clicked')}>
                My Button
            </Button>
        </div>
    );
}

export default App;
