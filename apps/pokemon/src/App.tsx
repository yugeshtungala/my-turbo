import { useEffect, useState } from "react";

import "./App.css";
import { getPokemons, type Pokemon } from "@repo/api";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons()
      .then((res) => res.data.results)
      .then((data) => setPokemons(data));
  }, []);

  console.log(pokemons, "xxxxxx");
  return <></>;
}

export default App;
