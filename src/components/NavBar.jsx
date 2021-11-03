import styled from "styled-components";

const NavBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBarText = styled.h1`
  font-size: x-large;
  margin-left: 1vw;
`;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <div>
        <img
          src="../pokemon-logo.png"
          alt="Pokemon Logo"
          className="nav-image"
        />
      </div>
      <NavBarText>Team Builder</NavBarText>
    </NavBarContainer>
  );
};
