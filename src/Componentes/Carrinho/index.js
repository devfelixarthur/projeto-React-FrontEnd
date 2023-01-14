import React, { useEffect, useState } from "react";
import axios from "axios";

// import Cardpacote from "../CardPacote";

import {
  Image,
  Button,
  CarrinhoContainer,
  DestinoName,
  PacotesId,
  Preco,
  ValorTotal,
  Display,
  Remover,
  Titulo,
} from "./style";

import bitcoin from "../../img/bitcoin.png";

const Carrinho = ({
  lista,
  removeCarrinho,
  setLista,
  somarQuantidade,
  diminuirQuantidade,
}) => {
  const [btc, setBtc] = useState({});
  
  const valorTotal = lista.reduce((a, c) => a + ((c.preco*btc).toFixed(2)) * c.quantidade, 0);

  const getBitcoin = async () => {
    try {
      const response = await axios.get(
        "https://www.mercadobitcoin.net/api/BTC/ticker/"
      );
      setBtc(response.data.ticker.last);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBitcoin();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("carrinho")) {
      setLista(JSON.parse(localStorage.getItem("carrinho")));
    } else {
      localStorage.setItem("carrinho", JSON.stringify(lista));
    }
  }, []);

  if (lista[0]) {
    return (
      <div>
        <Titulo align="center"> Carrinho de Compras</Titulo>
        {lista.map((item) => {
          return (
            <Display key={item.id}>
              <CarrinhoContainer>
                <Image src={item.image} />
                <DestinoName>{item.nome}</DestinoName>
                <PacotesId>{item.id}</PacotesId>
                <PacotesId>Quantidade:{item.quantidade}</PacotesId>
                <Remover>
                  <Preco>
                    <img width={"18px"} src={bitcoin} /> {item.preco},00
                  </Preco>

                  <Button
                    onClick={() => {
                      somarQuantidade(item);
                    }}
                  >
                    +
                  </Button>
                  {/* ------------------------------------ */}
                  <Button
                    onClick={() => {
                      removeCarrinho(item);
                    }}
                  >
                    Remover
                  </Button>


                  <Button
                    onClick={() => {
                      diminuirQuantidade(item);
                    }}
                  >
                    -
                  </Button>

                </Remover>
              </CarrinhoContainer>
            </Display>
          );
        })}
        <ValorTotal>
          {`Valor Total:   R$   ${valorTotal}`}
        </ValorTotal>
      </div>
    );
  } else {
    return (
      <CarrinhoContainer>
        <DestinoName>ADICIONE UMA VIAGEM AO CARRINHO</DestinoName>
      </CarrinhoContainer>
    );
  }
};

export default Carrinho;
