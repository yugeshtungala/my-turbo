import { useEffect, useState } from "react";

import "./App.css";
import { getPokemons, type Pokemon } from "@repo/api";
import { List } from "@repo/ui";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons()
      .then((res) => res.data.results)
      .then((data) => setPokemons(data));
  }, []);

  console.log(pokemons, "xxxxxx");
  return (
    <>
      <List pokemons={pokemons} />
    </>
  );
}

export default App;
