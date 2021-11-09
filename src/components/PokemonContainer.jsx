import styled from "styled-components";
import { useState, useEffect } from "react";
import { SelectedPokemonsContainer } from "./SelectedPokemonsContainer";
import { Loading } from "./Loading";

const FullPage = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: absolute;
  top: 15%;
  width: 70vw;
  height: 83vh; //maybe auto for expanding per pokemon row??? idk
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
  height: 45vh;
  border: 1px solid #c7c7c7;
  background-color: #e2e2e2;
  position: absolute;
  bottom: 2%;
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
  const [pokemonTeam, setPokemonTeam] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

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
  }, []);

  const getSelectedIndex = () => {
    for (let i = 0; i < pokemonTeam.length; i++) {
      if (pokemonTeam[i] == null) {
        return i;
      }
    }
  };

  const fetchSpecific = async (id) => {
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const jsonData = await rawData.json();
    return jsonData;
  };

  const onAdd = async (selectedId) => {
    if (pokemonTeam.every((e) => e !== null)) {
      alert("You can't have more than 6 pokemons in your team at once!");
      return;
    } else {
      const tempArr = [...pokemonTeam];
      const clickedPokemon = await fetchSpecific(selectedId);
      const selectedIndex = getSelectedIndex();

      const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.id != selectedId;
      });

      tempArr[selectedIndex] = {
        name: clickedPokemon.name,
        sprite: clickedPokemon.sprites.front_default,
        id: selectedId,
        types: clickedPokemon.types,
      };

      setPokemonTeam(tempArr);
      setPokemons(filteredPokemons);
    }
  };

  const onDelete = (id, name) => {
    const tempData = pokemonTeam.map((pokemon) => {
      if (pokemon != null && pokemon.id === id) {
        return null;
      } else {
        return pokemon;
      }
    });

    const reInsertedObj = {
      name: name,
      url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
      id: id,
    };

    const insert = (arr, index, ...newItems) => [
      ...arr.slice(0, index),
      ...newItems,
      ...arr.slice(index),
    ];

    const tempArr = insert(pokemons, id - 1, reInsertedObj);
    tempArr.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

    setPokemonTeam(tempData);
    setPokemons(tempArr);
  };

  return (
    <FullPage>
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
                      onDelete={null}
                      key={`null-pokemons-${i}`}
                      id={i}
                      types={["???", "???"]}
                    />
                  );
                } else {
                  return (
                    <SelectedPokemonsContainer
                      name={e.name}
                      sprite={e.sprite}
                      onDelete={() => onDelete(e.id, e.name)}
                      key={e.id}
                      id={`selected-pokemons-${e.id}`}
                      types={e.types.map((type) => type.type.name)}
                    />
                  );
                }
              })}
            </GridParent>
          </SelectedContainer>
        </FlexSelectedContainer>
        <FlexFetchContainer>
          <FetchContainer>
            {pokemons.length == 0 && <Loading />}

            {pokemons.map((pokemon) => {
              return (
                <PokeImage
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  key={pokemon.id}
                  onClick={() => onAdd(pokemon.id)}
                />
              );
            })}
          </FetchContainer>
        </FlexFetchContainer>
      </Container>
    </FullPage>
  );
};
