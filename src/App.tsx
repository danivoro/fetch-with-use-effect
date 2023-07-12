import { useEffect, useState } from "react";

// interface Joke {
//   quote: string;
// }

function App() {
  const [joke, setJoke] = useState<string>();

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        "https://api.kanye.rest"
      );
      const jsonBody: string[] = await response.json();
      setJoke(jsonBody[0]);
    };

    fetchJoke();
  }, [joke]);

  // useEffect(() => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Joke app</h1>
      {joke && joke.quote (
        <>
          <p>
            <b>{joke.quote}</b>
          </p>
        </>
      )}
    </>
  );
}

export default App;
