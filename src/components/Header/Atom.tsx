import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 15px 0;
  padding-bottom: 0;
`;
export const Logo = styled.h1`
  color: ${(props) => props.theme.color.secondColor};
  font-size: 25px;
  text-align: left;
`;
export const Link = styled(NavLink)`
  color: inherit;
  &:hover {
    color: inherit;
  }
`;
export const Delimetr = styled.hr`
  border-top: 1px dashed #c9c9c9;
  background: 0;
  margin: 15px 0;
`;
