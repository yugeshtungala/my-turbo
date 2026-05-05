import { api } from "./axios";

export const getPokemons = () => api.get("/pokemon");
