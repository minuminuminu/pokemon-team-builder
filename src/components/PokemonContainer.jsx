import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  position: absolute;
  top: 15%;
  width: 70vw;
  height: 80vh; //maybe auto for expanding per pokemon row??? idk
  border: 1px solid #c7c7c7;
  overflow: hidden;
`;

const FlexSelectedContainer = styled.div`
  position: absolute;
  bottom: 33%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const SelectedPokemonsContainer = styled.div`
  margin: auto;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 16%;
  height: 95%;
  background-color: blue;
`;

const SelectedPokemons = styled.div`
  width: 90%;
  height: 60%;
  background-color: red;
  margin: 1vh auto 3% auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedPokemonDetails = styled.div`
  width: 90%;
  height: 30%;
  background-color: red;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  text-align: center;
`;

const FlexFetchContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FetchContainer = styled.div`
  width: 90%;
  height: 60%;
  border: 1px solid #c7c7c7;
  background-color: #e2e2e2;
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
  const [types, setTypes] = useState([]);
  const DUMMY_DATA = [
    {
      name: "charizard",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
  ];

  useEffect(() => {
    const fetchPokemons = async () => {
      const rawData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
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

  // console.log(pokemons);
  // console.log(types);

  return (
    <Container>
      <FlexSelectedContainer>
        <SelectedContainer>
          <GridParent>
            <SelectedPokemonsContainer>
              <SelectedPokemons>
                <img src={DUMMY_DATA[0].sprite} />
              </SelectedPokemons>
              <SelectedPokemonDetails>
                {DUMMY_DATA[0].name}
                <br />
                Fire Air
              </SelectedPokemonDetails>
            </SelectedPokemonsContainer>
            <SelectedPokemonsContainer>
              <SelectedPokemons />
            </SelectedPokemonsContainer>
            <SelectedPokemonsContainer>
              <SelectedPokemons />
            </SelectedPokemonsContainer>
            <SelectedPokemonsContainer>
              <SelectedPokemons />
            </SelectedPokemonsContainer>
            <SelectedPokemonsContainer>
              <SelectedPokemons />
            </SelectedPokemonsContainer>
            <SelectedPokemonsContainer>
              <SelectedPokemons />
            </SelectedPokemonsContainer>
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
