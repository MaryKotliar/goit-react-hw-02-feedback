import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  focus {
    color: blue;
    border-color: blue;
  }
`;
