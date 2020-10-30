import styled from "styled-components";
import { ReactComponent as Icon } from "../../../assets/icons/search.svg";

export const SearchIcon = styled(Icon)`
  width: 16px;
`;

export const SearchForm = styled.form`
  position: relative;
  height: 45px;
  display: block;
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  border: 1px solid;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #363636;
  height: 100%;
  width: 100%;
  color: #b5b5b5;
  padding-left: 10px;
  padding-right: 60px;
  &:focus {
    border-color: rgb(122, 122, 122);
    color: #363636;
  }
  &:focus + button {
    border-left-color: rgb(122, 122, 122);
    border: none;
  }
`;
export const Button = styled.button`
  position: absolute;
  height: 100%;
  width: 45px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border: none;
  border-left: 1px solid #dbdbdb;
  background-color: transparent;
  color: #363636;
  cursor: pointer;
  transition: all 0.4s;
  &:focus {
    border-color: rgb(122, 122, 122);
    color: #363636;
  }
  &:hover {
    opacity: 0.5;
  }
`;
