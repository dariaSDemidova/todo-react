import { HeaderContainer, HeaderInner, HeaderLink } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLink to="/">ToDo</HeaderLink>
        <HeaderLink to="/list">List</HeaderLink>
      </HeaderInner>
    </HeaderContainer>
  );
};
