import Alert from "./components/Alert";
import Button from "./components/Button";
import React, { useState } from "react";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div>
            {alertVisible && (
                <Alert onClose={() => setAlertVisibility(false)}>
                    <strong>Alert!</strong>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="close"
                    ></button>
                </Alert>
            )}

            <Button color="danger" onClick={() => setAlertVisibility(true)}>
                My Button
            </Button>
        </div>
    );
}

export default App;
