import styled from "styled-components";

const SelectedPokemonContainer = styled.div`
  margin: 10px auto;
  width: 14%;
  border: 1px solid #c7c7c7;

  &:hover {
    cursor: ${(props) => (props.canDelete ? "not-allowed" : "default")};
  }
`;

const SelectedPokemons = styled.div`
  width: 90%;
  height: 60%;
  background-color: #e3e2e2;
  margin: 1vh auto 3% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c7c7c7;
`;

const SelectedPokemonDetails = styled.div`
  width: 90%;
  /* height: 30%; */
  /* background-color: #e65c5c; */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  text-align: center;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Types = styled.div`
  display: flex;
  flex-direction: row;
`;

const PokemonType = styled.div`
  margin: 0 2px 2px 2px;
  padding: 1px 5px 1px 5px;
  border-radius: 150px;

  background-color: ${(props) => getTypeColor(props.type).color};
  color: ${(props) => getTypeColor(props.type).textColor};
`;

const getTypeColor = (str) => {
  switch (str) {
    case "fire":
      return { color: "#e65c5c", textColor: "black" };
    case "water":
      return { color: "#6af1f1", textColor: "black" };
    case "grass":
      return { color: "#5ef77f", textColor: "black" };
    default:
      return "transparent";
  }
};

export const SelectedPokemonsContainer = (props) => {
  return (
    <SelectedPokemonContainer
      onClick={props.onDelete}
      canDelete={props.onDelete != null}
    >
      <SelectedPokemons>
        <img src={props.sprite} />
      </SelectedPokemons>
      <SelectedPokemonDetails>
        <Name>{props.name}</Name>
        <Types>
          {props.types.map((type, i) => (
            <PokemonType key={`${props.id}-type-${i}`} type={type}>
              {type}
            </PokemonType>
          ))}
        </Types>
      </SelectedPokemonDetails>
    </SelectedPokemonContainer>
  );
};
