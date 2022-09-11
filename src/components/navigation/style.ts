import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
  border-bottom: 1px solid rgb(226, 224, 224);
  background-color: rgb(208,241,230);

`
export const Ul = styled.ul`
display: flex;
background-color: blue;

`
export const Li = styled.li`
background-color: red;
`

export const Logo = styled.div``
export const Button = styled.button`
  background-color: rgb(208,241,230);
  border: none;
  height: 35px;
  width: 35px;
  &:hover {
    background-color: rgba(57,111,95, 0.3);
    color: white;
    border-radius: 50%;
    padding: 5px
  }
`
export const ButtonContainer = styled.div`
position: relative;

`


