import styled from "styled-components";

const CenteredLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = () => {
  return (
    <CenteredLoading>
      <img src="../../Spinner-1s-200px.svg" />
    </CenteredLoading>
  );
};
