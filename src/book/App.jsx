import React from "react"

const App = () => {
  return (
    <section className="booklist">
      <Book img={booklist[0].img} title={booklist[0].title} author={booklist[0].author} />
      <Book img={booklist[1].img} title={booklist[1].title} author={booklist[1].author} />
      <Book img={booklist[2].img} title={booklist[2].title} author={booklist[2].author} />
    </section>
  )
}

const booklist = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/5110qJqtLiL._SX403_BO1,204,203,200_.jpg",
    alt: "Programming",
    title: "The Little Book Of C# Programming",
    author: "Huw Collingbourne"
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/517m8+OZoTS._SX258_BO1,204,203,200_.jpg",
    alt: "Python-Programming",
    title: "Python Programming for Beginners",
    author: "AMZ Publishing"
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/41g3C9Ad-zL._SX404_BO1,204,203,200_.jpg",
    alt: "Python-Programming",
    title: "Learn Python Programming",
    author: "Fabrizio Romano & Heinrich Kruger"
  }
];

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.alt} />
      <h1>{props.title}</h1>
      <h4>by {props.author}</h4>
    </article>
  )
};

export default App;