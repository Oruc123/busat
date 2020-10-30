import styled from "styled-components";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

export const Heart = styled(HeartIcon)`
  width: 18px;
  height: 15px;
`;

export const Button = styled.span<{ bg?: boolean }>`
  height: 24px;
  cursor: pointer;
  width: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 4px;
  background: ${(props) =>
    props.bg ? props.theme.color.secondColor : props.theme.color.bgColor};
  transition: all 0.3s;
  &:hover {
    // background: ${(props) => props.theme.color.secondColor};
    opacity: 0.8;
  }
`;
