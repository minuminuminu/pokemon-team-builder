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
  height: 600px;
  width: 60vw;
  border: 1px solid #000000;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000042;
`;

const Types = styled.div`
  display: flex;
  flex-direction: row;
`;

const PokemonType = styled.div`
  margin: 0 2px 2px 2px;
  padding: 1px 5px 1px 5px;
  border-radius: 150px;
  text-transform: capitalize;

  background-color: ${(props) => getTypeColor(props.type).color};
  color: ${(props) => getTypeColor(props.type).textColor};
`;

const Li = styled.li`
  text-transform: capitalize;
`;

const RemoveBtn = styled.button`
  position: absolute;
  bottom: 10px;
  width: 12vw;
  height: 30px;
  background-color: red;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(223, 50, 50);
  }
`;

export const PokemonDetails = (props) => {
  return (
    <>
      {props.displayModal ? (
        <ModalContainer onClick={props.setDisplayModal}>
          <Modal>
            <>
              <img src={props.fullDetails.sprites.front_default} />
              <img src={props.fullDetails.sprites.back_default} />
            </>
            <Types>
              {props.fullDetails.types.map((type, i) => (
                <PokemonType
                  key={`${props.id}-type-${i}-fullDetails`}
                  type={type.type.name}
                >
                  {type.type.name}
                </PokemonType>
              ))}
            </Types>
            <ul>
              {props.fullDetails.stats.map((stat) => {
                return (
                  <Li key={"li-item-" + stat.stat.name}>
                    {stat.stat.name} : {stat.base_stat}
                  </Li>
                );
              })}
            </ul>
            <RemoveBtn onClick={() => props.onDelete(props.id, props.name)}>
              REMOVE FROM TEAM
            </RemoveBtn>
          </Modal>
        </ModalContainer>
      ) : null}
    </>
  );
};
