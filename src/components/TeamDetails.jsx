import styled from "styled-components";
import { getTypeColor } from "../getTypeColor";

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: #30303094;
  color: white;
`;

const Modal = styled.div`
  position: relative;
  height: 800px;
  width: 90vw;
  border: 1px solid #000000;
  border-radius: 15px;
  z-index: 2;
  display: flex;
  background-color: #00000042;
`;

const IndividualContainer = styled.div`
  margin: auto;
  width: 15%;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
`;

const ImgBorder = styled.img`
  margin: 3px;
  background-color: #31313111;
  border: 1px solid #313131;
`;

const DefaultP = styled.p`
  font-weight: 600;
  margin: 3px;
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

export const TeamDetails = (props) => {
  return (
    <>
      {props.displayTeamDetails ? (
        <ModalContainer
          onClick={() => props.setTeamDisplay(!props.displayTeamDetails)}
        >
          <Modal>
            {props.currentPokemonTeam.map((e, i) => {
              if (e == null) {
                return (
                  <IndividualContainer key={`individual container-${i}`}>
                    <ImgBorder src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png" />
                    <DefaultP>???</DefaultP>
                    <p>??? ???</p>
                  </IndividualContainer>
                );
              } else {
                return (
                  <IndividualContainer key={`actual-pokemon-${i}`}>
                    <ImgBorder src={e.sprites.front_default} />
                    <DefaultP>{e.name}</DefaultP>
                    <Types>
                      {e.types.map((type) => (
                        <PokemonType
                          key={`${type.type.name}-${i}-TeamDetails`}
                          type={type.type.name}
                        >
                          {type.type.name}
                        </PokemonType>
                      ))}
                    </Types>
                  </IndividualContainer>
                );
              }
            })}
          </Modal>
        </ModalContainer>
      ) : null}
    </>
  );
};
