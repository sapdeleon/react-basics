import React from "react"

const App = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, alt, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <h4>by {author}</h4>
    </article>
  )
};

const books = [
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

export default App;