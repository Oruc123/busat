import styled from "styled-components";

export const SelectWrapper = styled.div`
  height: 80px;
  background-color: #fff;
  position: relative;
  border-radius: 3px;
  padding: 15px;
  > span {
    color: #b5b5b5;
    font-size: 14px;
    display: inline-block;
  }
`;

export const SelecTitle = styled.div`
  color: ${(p) => p.theme.color.mainColor};
  font-size: 1rem;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.color.secondColor};
  }
`;
export const Select = styled.div`
  font-size: 0.75rem;
  color: ${(p) => p.theme.color.mainColor};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  top: 85px;
  z-index: 3;
  background: #fff;
  width: 100%;
  border-radius: 3px;
  overflow-y: auto;
  max-height: 300px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      font-size: 0.75rem;
      margin-bottom: 5px;
      cursor: pointer;
      color: ${(p) => p.theme.color.mainColor};
      padding: 10px 15px;
      &:hover {
        background-color: #f5f5f5;
        color: ${(p) => p.theme.color.secondColor};
      }
    }
  }
`;

export const SubmitButton = styled.button`
  border: none;
  height: 100%;
  width: 100%;
  display: block;
  color: ${(p) => p.theme.color.whiteColor};
  background-color: ${(p) => p.theme.color.secondColor};
  border-radius: 3px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: #d5095e;
  }
`;
