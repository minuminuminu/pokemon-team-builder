import styled from "styled-components";

const SelectedPokemonContainer = styled.div`
  margin: 10px auto;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 16%;
  background-color: blue;

  &:hover {
    cursor: ${(props) => (props.canDelete ? "not-allowed" : "default")};
  }
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
  /* height: 30%; */
  background-color: red;
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
        Fire Air
      </SelectedPokemonDetails>
    </SelectedPokemonContainer>
  );
};
