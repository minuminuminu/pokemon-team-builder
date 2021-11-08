import styled from "styled-components";

const SelectedPokemonContainer = styled.div`
  margin: 10px auto;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 14%;
  /* background-color: blue; */
  height: 165px;
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
  /* background-color: red; */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  text-align: center;
`;

export const SelectedPokemonsContainer = (props) => {
  return (
    <SelectedPokemonContainer
      onClick={props.onDelete}
      canDelete={props.id != null}
    >
      <SelectedPokemons>
        <img src={props.sprite} />
      </SelectedPokemons>
      <SelectedPokemonDetails>
        {props.name}
        <br />
        {props.types}
      </SelectedPokemonDetails>
    </SelectedPokemonContainer>
  );
};
