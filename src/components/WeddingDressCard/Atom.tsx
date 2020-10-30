import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0.5em 1em -0.125em rgba(74, 74, 74, 0.1),
    0 0 0 1px rgba(74, 74, 74, 0.02);
`;

export const CardImg = styled.img`
  object-fit: cover;
  height: 362px;
  display: block;
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: ${(pr) => pr.theme.color.titleColor};
  margin: 0;
  margin-bottom: 5px;

  &:hover {
    color: ${(pr) => pr.theme.color.secondColor};
  }
`;

export const CardContent = styled.div`
  background-color: #fff;
  padding: 0.7rem;
`;
export const Size = styled.p`
  font-size: 1rem;  margin: 0;
  margin-bottom: 5px
  color: ${(pr) => pr.theme.color.mainColor};
`;
export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
  color: ${(pr) => pr.theme.color.titleColor};
`;

export const MoreInfo = styled(Link)`
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #fff;
  color: ${(pr) => pr.theme.color.secondColor};
  border: 1px solid ${(pr) => pr.theme.color.secondColor};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2.75em;
  padding-right: 2.75em;
  height: 45px;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #fff;
    background-color: ${(pr) => pr.theme.color.secondColor};
  }
`;

export const MoreButton = styled.button`
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
  background-color: ${(pr) => pr.theme.color.secondColor};
  border: 1px solid ${(pr) => pr.theme.color.secondColor};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2.75em;
  padding-right: 2.75em;
  height: 45px;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #d5095e;
  }
`;
