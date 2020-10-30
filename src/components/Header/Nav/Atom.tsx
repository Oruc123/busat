import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  font-weight: 600;
  color: ${(props) => props.theme.color.linkColor};
  display: block;
  width: 100%;
  text-decoration: none;
  padding-bottom: 15px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: 9;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.color.secondColor};
    opacity: 0;
  }

  &:hover {
    color: ${(props) => props.theme.color.secondColor};
  }
  &:hover::after {
    opacity: 1;
  }
`;
