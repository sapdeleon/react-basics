import React from "react"

const Greeting = () => {

    let greeting = "Good..."
    // const testTime = new Date(2022, 3, 26, 19).getHours();
    const currentTime = new Date().getHours();
    // console.log(time)

    const customStyle = {
        color: "red"
    }

    if (currentTime >= 0 && currentTime < 12) {
        customStyle.color = "red"
        greeting = "Good morning..."
    } else if (currentTime > 12 && currentTime < 18) {
        customStyle.color = "green"
        greeting = "Good afternoon..."
    } else {
        customStyle.color = "blue"
        greeting = "Good evening..."
    }

    return (
        <h1 style={customStyle}>{greeting}</h1>
    );
}

export default Greeting;