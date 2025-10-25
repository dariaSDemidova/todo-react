import { useDispatch } from "react-redux";
import {
  HeaderContainer,
  HeaderInner,
  HeaderLink,
  ToggleButton,
} from "./Header.styled";
import { toggleThemeAction } from "../../feature/themeList";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLink to="/">ToDo</HeaderLink>
        <HeaderLink to="/list">List</HeaderLink>
        <ToggleButton onClick={() => dispatch(toggleThemeAction())}>
          theme
        </ToggleButton>
      </HeaderInner>
    </HeaderContainer>
  );
};
