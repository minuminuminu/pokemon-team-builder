import styled from "styled-components";
import { useState, useEffect } from "react";
import { SelectedPokemonsContainer } from "./SelectedPokemonsContainer";

const Container = styled.div`
  position: absolute;
  top: 15%;
  width: 70vw;
  height: 80vh; //maybe auto for expanding per pokemon row??? idk
  border: 1px solid #c7c7c7;
  overflow: hidden;
`;

const FlexSelectedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3%;
`;

const SelectedContainer = styled.div`
  width: 95%;
  height: 30%;
  border: 1px solid #c7c7c7;
  background-color: #e2e2e2;
`;

const GridParent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexFetchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FetchContainer = styled.div`
  width: 90%;
  height: 450px;
  border: 1px solid #c7c7c7;
  background-color: #e2e2e2;
  position: absolute;
  bottom: 5%;
  overflow: scroll;
  overflow-x: hidden;
`;

const PokeImage = styled.img`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const PokemonContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  const DUMMY_DATA = [
    {
      name: "charizard",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      id: 1,
    },
    {
      name: "bulbasaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      id: 2,
    },
    {
      name: "turtok",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      id: 3,
    },
  ];

  const [pokemonTeam, setPokemonTeam] = useState([
    null,
    ...DUMMY_DATA,
    null,
    null,
  ]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const rawData = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
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

    //   const fetchTypes = async () => {
    //     const rawData = await fetch("https://pokeapi.co/api/v2/type");
    //     const jsonData = await rawData.json();

    //     const jsonDataResults = jsonData.results;
    //     const results = [];

    //     for (let i = 0; i < jsonDataResults.length - 2; i++) {
    //       results.push({
    //         name: jsonDataResults[i].name,
    //         url: jsonDataResults[i].url,
    //         id: i + 1,
    //       });
    //     }

    //     setTypes(results);
    //   };

    //   fetchTypes();
  }, []);

  const onDelete = (id) => {
    const tempData = pokemonTeam.map((pokemon) => {
      if (pokemon != null && pokemon.id === id) {
        return null;
      } else {
        return pokemon;
      }
    });
    setPokemonTeam(tempData);
  };

  return (
    <Container>
      <FlexSelectedContainer>
        <SelectedContainer>
          <GridParent>
            {pokemonTeam.map((e, i) => {
              if (e == null) {
                return (
                  <SelectedPokemonsContainer
                    name="???"
                    sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
                    onDelete={() => {}}
                    key={i}
                    id={null}
                  />
                );
              } else {
                return (
                  <SelectedPokemonsContainer
                    name={e.name}
                    sprite={e.sprite}
                    onDelete={() => onDelete(e.id)}
                    key={e.id}
                    id={e.id}
                  />
                );
              }
            })}
          </GridParent>
        </SelectedContainer>
      </FlexSelectedContainer>
      <FlexFetchContainer>
        <FetchContainer>
          {pokemons.map((pokemon) => {
            return (
              <PokeImage
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                key={pokemon.id}
              />
            );
          })}
        </FetchContainer>
      </FlexFetchContainer>
    </Container>
  );
};
