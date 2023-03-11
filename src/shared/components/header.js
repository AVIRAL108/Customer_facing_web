import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  background: blue;
  color: #ffffff;
  padding: 1rem;
`;

const Header = ({ companyName }) => {
  return <StyledHeader> {companyName} </StyledHeader>;
};
export default Header;
