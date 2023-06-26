import ListGroup from "./components/ListGroup";


function App() {


    let items = ["San Francisco", "Austin", "Dallas"];

    return (
        <div>
            <ListGroup
                items={items}
                heading={"Cities"}
                onSelectItem={() => console.log("Clicked")}
            />
        </div>
    );
}

export default App;
