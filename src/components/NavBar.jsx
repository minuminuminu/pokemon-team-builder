import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 15vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #524747;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    color: #2b2121;
  }
  &:visited {
    color: #524747;
  }
`;

const NavBarText = styled.h1`
  font-size: x-large;
  margin: 1vw;
`;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/" className="nav-link">
        <Wrapper>
          <div>
            <img
              src="../pokemon-logo.png"
              alt="Pokemon Logo"
              className="nav-image"
            />
          </div>
          <NavBarText>Team Builder</NavBarText>
          <div>
            <img
              src="../pokemon-logo.png"
              alt="Pokemon Logo"
              className="nav-image"
            />
          </div>
        </Wrapper>
      </Link>
    </NavBarContainer>
  );
};
