import React from "react";
import {
  Image,
  Button,
  CardContainer,
  DestinoName,
  PacotesId,
  Preco,
  Comprar,
  Descricao,
  Display
} from "./style";
import bitcoin from "../../img/bitcoin.png"



const Cardpacote = ({imagem, nome, id, descricao, preco, addCarrinho, item}) => {
  return (
    <Display>
      <CardContainer>
        <Image src={imagem} />
        <DestinoName>{nome}</DestinoName>
        <PacotesId>{id}</PacotesId>
        <Descricao>{descricao}</Descricao>
        <Comprar>
          <Preco><img width={"18px"} src={bitcoin}/> {preco},00</Preco>
          <Button onClick={()=>{addCarrinho(item)}}>Comprar</Button>
        </Comprar>
      </CardContainer>
    </Display>
  );
};

export default Cardpacote;