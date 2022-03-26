import React from 'react';

const App = () => {

    const fname = "Thomas"
    const lname = "Mackenzie"
    const random = Math.floor(Math.random() * 20) // 1-20
    const year = new Date().getFullYear()
    const image = "https://picsum.photos/200"

    return (
        <div>
            <h2 className="heading">Favourite number is {random}</h2>
            <img src={image} alt="picsum"></img>
            <p>Create by {fname} {lname}</p>
            <p>Copyright &copy; {year}</p>
        </div>
    );
}

export default App;