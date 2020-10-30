import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as PrevIcon } from "../../assets/icons/prev.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg";
export const CardWrapper = styled.div`
  display: block;
  height: 364px;
  width: 100%;
  position: relative;
`;

export const CardBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const CardImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const CardCategory = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  border-radius: 4px;
  color: ${(props) => props.theme.color.mainColor};
  background: #fff;
  font-weight: 700;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
`;
export const CardLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
export const CardCount = styled(Link)`
  position: absolute;
  left: 10px;
  bottom: 10px;
  border-radius: 4px;
  z-index: 3;
  background-color: ${(props) => props.theme.color.secondColor};
  color: #fff;
  padding: 0.75rem 1.5rem;
  line-height: 1.5;
  white-space: nowrap;
  font-weight: 700;
`;

export const ArrowButtons = styled.span<{ arrow: string }>`
  position: absolute;
  top: 50%;
  display: inline-block;
  transform: translateY(-50%);
  width: 53px;
  height: 53px;
  font-size: 42px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  color: #cacaca;
  ${(props) => (props.arrow === "prev" ? "left: -60px;" : "right: -60px;")}
`;

export const Prev = styled(PrevIcon)`
  width: 0.625em;
  display: inline-block;
  font-size: inherit;
  height: 1em;
`;

export const Next = styled(NextIcon)`
  width: 0.625em;
  display: inline-block;
  font-size: inherit;
  height: 1em;
`;
