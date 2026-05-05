import React from "react";
import { type Pokemon } from "@repo/api";
import "./List.css";

type ListProps = {
  pokemons: Pokemon[];
};

export const List = ({ pokemons }: ListProps) => {
  console.log(pokemons, "listttttt");
  return (
    <div className="container">
      {pokemons.map((poke) => (
        <div className="card" key={poke?.name}>
          <img src={poke?.url} />
          <p>{poke?.name}</p>
        </div>
      ))}
    </div>
  );
};
