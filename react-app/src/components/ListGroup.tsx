import {Fragment} from "react";

function ListGroup(){
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    const message = items.length=== 0 ? <p>No Item Found</p> : null;

    return (
        <>
        <h1>List</h1>
            {message}
        <ul className="list-group">
            {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
        </ul>
        </>);
}

export default ListGroup;