import React from "react"

const Greeting = () => {

    var greeting = "Good morning..."
    var time = new Date().getTime();

    const customStyle = {
        color: "red"
    }

    return (
        <h1 style={customStyle}>{greeting}</h1>
    );
}

export default Greeting;