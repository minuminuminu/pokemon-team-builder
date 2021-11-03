import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  position: absolute;
  bottom: 5%;
  width: 70vw;
  height: 80vh; //maybe auto for expanding per pokemon row??? idk
  border: 1px solid #c7c7c7;
`;

export const PokemonContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const rawData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
      const jsonData = await rawData.json();

      const jsonDataResults = jsonData.results;
      const results = [];

      for (let i = 0; i < jsonDataResults.length; i++) {
        results.push({
          name: jsonDataResults[i].name,
          url: jsonDataResults[i].url,
          id: i + 1,
        });
      }

      setPokemons(results);
    };

    fetchPokemons();
  }, []);

  return (
    <Container>
      <div>
        {pokemons.map((pokemon) => {
          return (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              key={pokemon.id}
            />
          );
        })}
      </div>
    </Container>
  );
};
