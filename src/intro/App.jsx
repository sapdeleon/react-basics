import React from "react"
import Greeting from "./Greeting";
import { pi, doublePi, triplePi, add, multiply, subtract, divide } from "./math"

const App = () => {
    return (
        <div>
            <Greeting />
            <ul>
                <li>{pi}</li>
                <li>{doublePi()}</li>
                <li>{triplePi()}</li>
                <li><p>Math Operations</p></li>
                <ul>
                    <li>{add(1, 2)}</li>
                    <li>{multiply(2, 3)}</li>
                    <li>{subtract(7, 2)}</li>
                    <li>{divide(5, 2)}</li>
                </ul>
            </ul>
        </div>
    );
}

export default App;