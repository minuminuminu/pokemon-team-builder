import styled from "styled-components";

const SelectedPokemonContainer = styled.div`
  margin: 10px auto;
  width: 14%;
  border: 1px solid #c7c7c7;

  &:hover {
    cursor: ${(props) => (props.canDelete ? "pointer" : "default")};
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
    case "ice":
      return { color: "#6af1f1", textColor: "black" };
    case "grass":
      return { color: "#5ef77f", textColor: "black" };
    case "bug":
      return { color: "#83be90", textColor: "black" };
    case "poison":
      return { color: "#f050e2", textColor: "black" };
    case "flying":
      return { color: "#70b7cc", textColor: "black" };
    case "ground":
      return { color: "#8d4330", textColor: "white" };
    case "steel":
      return { color: "#979fa1", textColor: "black" };
    case "normal":
      return { color: "#c0cacc", textColor: "black" };
    case "electric":
      return { color: "#dbe961", textColor: "black" };
    case "fighting":
      return { color: "#d14f4f", textColor: "black" };
    case "psychic":
      return { color: "#d639b4", textColor: "white" };
    case "rock":
      return { color: "#e0740f", textColor: "white" };
    case "ghost":
      return { color: "#79127c", textColor: "white" };
    case "water":
      return { color: "#62c2df", textColor: "black" };
    case "dark":
      return { color: "#523620", textColor: "white" };
    case "fairy":
      return { color: "#ff9be9", textColor: "white" };
    case "dragon":
      return { color: "#002c8a", textColor: "white" };
    default:
      return "transparent";
  }
};

export const SelectedPokemonsContainer = (props) => {
  return (
    <SelectedPokemonContainer
      onClick={props.onDetails}
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
