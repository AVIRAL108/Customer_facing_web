import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #f0f0f5;
`;
const Wrapper = ({ children }) => {
  return <StyledWrapper> {children} </StyledWrapper>;
};

export default Wrapper;
