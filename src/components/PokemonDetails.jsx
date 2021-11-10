import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Modal = styled.div`
  height: 60vh;
  width: 60vw;
  background-color: black;
  z-index: 2;
`;

export const PokemonDetails = (props) => {
  return (
    <>
      {props.displayModal ? (
        <ModalContainer onClick={props.setDisplayModal}>
          <Modal></Modal>
        </ModalContainer>
      ) : null}
    </>
  );
};
