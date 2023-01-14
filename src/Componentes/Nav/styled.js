import styled from "styled-components";

export const NavContainer = styled.ul`
  display: flex;
  position: fixed;
  background-color: black;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  height: 15vh;
  padding: 10px;
  z-index: 1;
`;

export const Bitcoin = styled.h3`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  color: white;
`;

export const NavContainerLateral=styled.ul`
padding-top: 15vh;
position: fixed;
display: flex;
align-items: center;
flex-direction: column;
background-color: black;
height: 100vh;
width: 10vw;
color: white;
`

export const InputValue = styled.input`
width: 80%;
margin-top: 10px;
`

export const Select = styled.select`
width: 80%;
margin-top: 10px;
margin-bottom: 8vh;

`

export const Button = styled.button`
  padding: 8px;
  margin-top: 5px;
  margin-right: 5vw;
  margin-left: 5vw;
  background-color: black;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  :hover {
    transform: scale(1.1);
    background-color: #3366ff;
    color: white;
  }
`;

export const Buscador = styled.button`
  padding: 5px;
  background-color: black;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  #busca {
    padding: 2px;
    border-radius: 0px;
  }
`;

export const ImagemLogo = styled.img`
  max-height: 15vh;
  margin-right: 0px;
  transform: rotate(45deg);
`;

export const AnimacaoLogo = styled.div`
color: white;
text-align: center;
min-width:10%;
margin-right: 50px;
  .imagemTexto{
    height: 10vh;
  }
`;

export const ImagemNav = styled.img`
  /* padding: 2px; */
  width: 100px;
  min-height: 5vh;

`;
