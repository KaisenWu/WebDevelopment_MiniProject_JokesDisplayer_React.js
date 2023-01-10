import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

function App() {
  const url = "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=9";
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jokeData) => {
        console.log(jokeData.jokes);
        for (let i = 0; i < jokeData.jokes.length; i++) {
          var currentJoke = {
            id: jokeData.jokes[i].id,
            setup: jokeData.jokes[i].setup,
            delivery: jokeData.jokes[i].delivery,
          };
          setJokes((preJokes) => [...preJokes, currentJoke]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="gallery">
        {jokes.map((joke) => {
          return (
            <Note
              id={joke.id.toString()}
              setup={joke.setup}
              delivery={joke.delivery}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
