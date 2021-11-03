import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 5%;
  width: 70vw;
  height: 80vh; //maybe auto for expanding per pokemon row??? idk
  border: 1px solid #818181;
`;

export const PokemonContainer = () => {
  return <Container></Container>;
};
