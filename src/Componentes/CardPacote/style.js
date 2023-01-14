import styled from "styled-components";

export const Display = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: auto;
`

export const CardContainer = styled.div`
  padding: 0 16px 16px 16px;
  min-width: 150px;
  max-width: 250px;
  border: solid white 3px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin: 10px;
  color: white;
`;

export const DestinoName = styled.h2`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: auto;
`;

export const Preco = styled.h4`
  font-size: 18px;
  padding:5px;
  background-color: white;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: black;
  display:flex;
  margin-bottom: auto;
`;

export const PacotesId = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin-bottom: auto;
`;

export const DestinoContainer = styled.div`
  margin-bottom: 52px; 
`;

export const Button = styled.button`
  padding: 8px;
  margin-left: 20px;
  background-color: #3366ff;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  :hover {
    transform: scale(1.1);
    background-color: #3366ff;
    color: red;
  }
`;

export const Comprar = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
align-content: center;
justify-items: baseline;
`;

export const Descricao = styled.h4`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: justify;
  color: white;
  margin-bottom: 10px;
`

export const Image = styled.img`
height: auto;
margin-bottom: auto;
width: 250px;
border-top-left-radius: 12px;
border-top-right-radius: 12px;
border-bottom-right-radius: 50px;
border-left: solid white 3px;
border-right: solid white 1px;
:hover{
  transform: scale(1.1);
  border-left: solid white 3px;
  border-right: solid white 1px;
  border-top: solid white 3px;

}
`