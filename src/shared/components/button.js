import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ background }) => background || "grey"};
  color: ${({ color }) => color || "#fff"};
  padding: 0.5rem 0.75rem;
  box-shadow: none;
  border: ${({ color }) => color || "none"};
  border-radius: 0.25rem;
`;
const Button = (props) => {
  const { text, children, ...rest } = props;
  return <StyledButton {...rest}>{text || children}</StyledButton>;
};

export default Button;
