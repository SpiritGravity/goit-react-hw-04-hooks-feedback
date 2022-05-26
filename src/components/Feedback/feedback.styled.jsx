import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px 10px;
  margin: 5px;
  text-transform: capitalize;

  transition: all 150ms ease-in-out;
  
  &:hover {
  background-color: green;
  transform: translate(-100%, 0) rotate(10deg)
    transform-origin top left
    transition .2s transform ease-out
    will-change transform
    z-index -1
  }
`;
