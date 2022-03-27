import React from "react"

const App = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
};

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/41d5DXqG+dL._AC_UL320_.jpg" alt="Sql-Server" />
);

const Title = () => (
  <h1>Sql Svr Developer Edit 2008 DVD</h1>
);

const Author = () => (
  <h4>by Microsoft</h4>
);

export default App;