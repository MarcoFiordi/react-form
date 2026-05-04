import { useState } from "react";


function App() {
  const [articles, setArticles] = useState ([
    {
      id: 1,
      titolo: "articolo 1",
      contenuto: "contenuto di articolo 1,"
    },
    {
      id: 2,
      titolo: "articolo 2",
      contenuto: "contenuto di articolo 2,"
    },
    {
      id: 3,
      titolo: "articolo 3",
      contenuto: "contenuto di articolo 3,"
    },

  ]);
  return (
    <>
      <h1>react-form</h1>
      <section>
        {articles.map(function(article){
          return (
            <article key={article.id}>
              <h2>{article.titolo}</h2>
              <p>{article.contenuto}</p>
            </article>
          );
        })}
      </section>
    </>

  );
}
export default App;
