import styled from "styled-components";
import { PokemonContainer } from "../components/PokemonContainer";

const FullPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const HomePage = () => {
  return (
    <FullPage>
      <PokemonContainer />
    </FullPage>
  );
};
