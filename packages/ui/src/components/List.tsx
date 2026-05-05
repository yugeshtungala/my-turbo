import React from "react";
import { type Pokemon } from "@repo/api";
type ListProps = {
  pokemons: Pokemon[];
};

export const List = ({ pokemons }: ListProps) => {
  return (
    <div>
      {pokemons.map((poke) => (
        <div key={poke?.name}>
          <img src={poke?.url} />
          <p>{poke?.name}</p>
        </div>
      ))}
    </div>
  );
};
