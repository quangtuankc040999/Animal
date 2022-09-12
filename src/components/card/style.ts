import styled from "styled-components";
export const CardContainer = styled.div`
  width: 320px;
  height: 350px;
  border-radius: 10px;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`
export const Image = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
`
export const Ul = styled.ul`
list-style: none
`
