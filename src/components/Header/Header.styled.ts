import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const HeaderContainer = styled.header `
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`

export const HeaderInner = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const HeaderLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

  &.active {
    color: #ffffff33;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 6px;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #4682b4;
  }

  &:active {
    transform: translateY(-48%);
  }
`
