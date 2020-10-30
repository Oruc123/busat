import styled from "styled-components";
import { ReactComponent as Icon } from "../../../assets/icons/user.svg";

export const AuthOpenerButton = styled.a`
  font-weight: 700;
  color: ${(props) => props.theme.color.mainColor};
  cursor: pointer;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.color.secondColor};
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid;
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

export const UserIcon = styled(Icon)`
  width: 16px;

  // &:hover {
  //   color: ${(props) => props.theme.color.secondColor};
  // }
`;
