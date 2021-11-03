import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 5%;
  width: 70vw;
  height: 80vh; //maybe auto for expanding per pokemon row??? idk
  border: 1px solid #c7c7c7;
`;

export const PokemonContainer = () => {
  return <Container></Container>;
};
