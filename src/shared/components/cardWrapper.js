import styled from "styled-components";

const StyledCardWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1rem;
`;
const CardWrapper = ({ children }) => {
  return <StyledCardWrapper> {children} </StyledCardWrapper>;
};

export default CardWrapper;
