import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
  Button,
  NavContainer,
  Buscador,
  ImagemLogo,
  AnimacaoLogo,
  NavContainerLateral,
  InputValue,
  Select,
  ImagemNav,
  Bitcoin,
} from "./styled";
import logo from "../../img/foguete.gif";
import logotext from "../../img/logotext.png";
import logotipo_Koala from "../../img/logotipo_Koala.png";
import logotipo_Mel from "../../img/logotipo_Mel.png";
import logotipo_Jaziel from "../../img/logotipo_Jaziel.png";
import logotipo_PH from "../../img/logotipo_PH.png";
import carrinhologo from "../../img/carrinho.png"
import home from "../../img/home.png"

const Nav = ({
  name,
  setName,
  page,
  setPage,
  id,
  setId,
  setVarMin,
  setVarMax,
  varMin,
  varMax,
  ordenacao,
  setOrdenacao,
}) => {
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChagePageCarrinho = () => {
    setPage(2);
  };
  const onChagePageHome = () => {
    setPage(1);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangeVarMin = (e) => {
    setVarMin(e.target.value);
  };

  const onChangeVarMax = (e) => {
    setVarMax(e.target.value);
  };

  const onChangeOrdancao = (e) => {
    setOrdenacao(e.target.value);
  };

const [bitcoin, setBitcoin] = useState({})

const getBitcoin = async ()=>{
  try {
    const response = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/');
    setBitcoin(response.data.ticker.last)
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
getBitcoin()
}, [])

  return (

    
    <div>
      <NavContainer>
        <AnimacaoLogo>
          <img className="imagemTexto" src={logotext} />
        </AnimacaoLogo>
        <ImagemLogo src={logo} />
        <Buscador>
          <input
            type="text"
            onChange={(e) => {
              onChangeName(e);
            }}
            placeholder="Digite o destino..."
          />
        </Buscador>
        <Buscador>
          <input
            type="number"
            onChange={(e) => {
              onChangeId(e);
            }}
            placeholder="Digite o id..."
          />
        </Buscador>
        <Button
          onClick={() => {
            onChagePageHome(1);
          }}
        >
          <img width='50px' height='50px' src={home}/>
        </Button>
        <Button
          onClick={() => {
            onChagePageCarrinho(2);
          }}>
            <img width='50px' height='50px' src={carrinhologo}/>
        </Button>
        <Bitcoin>Cotação do bitcoin
        <p><strong>R$ {Math.round(bitcoin)},00</strong></p>
        </Bitcoin>
    </NavContainer>

      <NavContainerLateral>
        <InputValue
          type="number"
          onChange={(e) => {
            onChangeVarMin(e);
          }}
          placeholder="Valor Mínimo"
        />
        <InputValue
          type="number"
          onChange={(e) => {
            onChangeVarMax(e);
          }}
          placeholder="Valor Máximo"
        />

        <Select
          value={ordenacao}
          onChange={(e) => {onChangeOrdancao(e)}}
        >
          <option value="Ordenar">Ordenar</option>
          <option value="Crescente">A - Z</option>
          <option value="Decrescente">Z - A</option>
        </Select>
        <p>Parceiros:</p>
        <a href="https://www.google.com.br" target="_blank">
          <ImagemNav src={logotipo_Koala} />
        </a>
        <a href="https://www.google.com.br" target="_blank">
          <ImagemNav src={logotipo_Mel} />
        </a>

        <a href="https://www.google.com.br" target="_blank">
          <ImagemNav src={logotipo_Jaziel} />
        </a>

        <a href="https://www.google.com.br" target="_blank">
          <ImagemNav src={logotipo_PH} />
        </a>

      </NavContainerLateral>
    </div>
  );
};

export default Nav;

export const NavCarrinho = ({ setPage }) => {
  const onChagePageCarrinho = () => {
    setPage(2);
  };
  const onChagePageHome = () => {
    setPage(1);
  };
  const [bitcoin, setBitcoin] = useState({})

  const getBitcoin = async ()=>{
    try {
      const response = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/');
      setBitcoin(response.data.ticker.last)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
  getBitcoin()
  }, [])

  

  return (
    <NavContainer>
      <AnimacaoLogo>
        <img className="imagemTexto" src={logotext} />
      </AnimacaoLogo>
      <ImagemLogo src={logo} />
      <Button
        onClick={() => {
          onChagePageHome(1);
        }}
      >
        <img width='50px' height='50px' src={home}/>
      </Button>
      <Button onClick={()=>{onChagePageCarrinho(2);}}>
      <img width='50px' height='50px' src={carrinhologo}/>
      </Button>
      <Bitcoin>Cotação do bitcoin
        <p><strong>R$ {Math.round(bitcoin)},00</strong></p>
        </Bitcoin>
    </NavContainer>
  );
};
