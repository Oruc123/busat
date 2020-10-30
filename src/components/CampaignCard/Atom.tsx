import styled from "styled-components";
import { Link } from "react-router-dom";
export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(74, 74, 74, 0.1),
    0 0 0 1px rgba(74, 74, 74, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;
export const CardImg = styled.img`
object-fit: cover;
height: 250px;
display: block;
width: 100%;
}
`;

export const CardContent = styled.div`
  padding: 10px;
`;
export const CardTitle = styled(Link)`
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.color.titleColor};
  font-size: 1.25rem;
  &:hover {
    color: ${(props) => props.theme.color.secondColor};
  }
`;
export const CardDesc = styled.p`
  color: ${(props) => props.theme.color.greyColor};
  font-size: 0.85rem;
  margin-top: 4px;
  line-height: 1;
`;

export const CampaignTop = styled.span<{ top: string; left: string }>`
  position: absolute;
  top: ${(props) => props.top};
  border-radius: 4px;
  left: ${(props) => props.left};
  background-color: #00adad;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  height: 2em;
  padding-left: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;
`;
