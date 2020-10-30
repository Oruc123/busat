import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
export const HeadWrapper = styled(Grid)`
  margin-bottom: 22px;
`;
export const H2 = styled.h2`
  color: ${(props) => props.theme.color.titleColor};
  font-size: 1.75rem;
  margin: 0;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.color.mainColor};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
  &::before {
    content: "|";
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.color.secondColor};
    margin-right: 0.25rem;
  }
`;

export const MyLink = styled(Link)`
  font-weight: 700;
  color: ${(props) => props.theme.color.secondColor};
  &:hover {
    text-decoration: underline;
  }
`;
