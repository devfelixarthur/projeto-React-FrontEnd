import React, { useEffect } from "react";
import Footer from "./Componentes/Footer";
import { GlobalStyled } from "./Componentes/GlobalStyled";
import Nav, { NavCarrinho } from "./Componentes/Nav";
import pacotes from "../src/Componentes/Pacotes/pacotes.json";
import styled from "styled-components";
import Cardpacote from "./Componentes/CardPacote";
import { useState } from "react";
import Carrinho from "./Componentes/Carrinho/index";

export const MainContainer = styled.main`
  margin: 0px;
  background-image: url("https://i.imgur.com/suocxU4.jpg");
  position: inherit;
  padding-top: 15vh;
  padding-left: 14vw;
  padding-bottom: 5vw;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

function App() {
  // Com o estado name vou criar o filtro de busca pelo nome
  const [name, setName] = useState("");
  // Com o onChangePage altero o estado da page, e tentar fazer a estilização condicional
  // entre o Carrinho e o Home
  const [page, setPage] = useState(1);

  // Com o estado id vou criar o filtro de busca pelo id
  const [id, setId] = useState("");

  const [varMin, setVarMin] = useState(0);

  const [varMax, setVarMax] = useState(999);

  // Ordenção por ordem crescente e decrescente:

  const [ordenacao, setOrdenacao] = useState("Ordenar");

  const [compra, setCompra] = useState({});

  // Criando Renderização para carrinho de compra
  const [lista, setLista] = useState([]);
  
  // Estado para botões "+" e "-" do Carrinho
  
  const [quant,setQuant] = useState([])


  

  const addCarrinho = (produto) => {
    const carrinho = [...lista];
    const item = carrinho.find((product) => product.id === produto.id);
    if (!item) {
      carrinho.push({
        image: produto.imagem,
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1,
      });
    } else {
      item.quantidade = item.quantidade + 1;
      // somarQuantidade(item)
    }
    setLista(carrinho);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  };


// TESTANDO BOTÃO "+" E "-"" NO CARRINHO
  const somarQuantidade = (item)=>{
    addCarrinho(item)
  }

  const diminuirQuantidade = (item)=>{
   const produtoExiste = lista.find((x) => x.id===item.id );
    if (produtoExiste && produtoExiste.quantidade >1 ) {
      setLista(
        lista.map((x)=>{
        return x.id === item.id ? {...produtoExiste, quantidade: produtoExiste.quantidade - 1 } : x
        })
      );
      
    } else if (produtoExiste.quantidade < 2 ){
      const copyCarrinho = [...lista];
      const carrinhoFiltrado = copyCarrinho.filter((item) => item !== produtoExiste);
      removeCarrinho(produtoExiste)
    }
  }

  const removeCarrinho = (produto) => {
    const copyCarrinho = [...lista];
    const item = copyCarrinho.find((product) => product.id === produto.id);
    const carrinhoFiltrado = copyCarrinho.filter((item) => item !== produto);
    setLista(carrinhoFiltrado);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoFiltrado));
  };

  if (page === 1) {
    return (
      <div className="body">
        <GlobalStyled />
        <Nav
          name={name}
          setName={setName}
          page={page}
          setPage={setPage}
          id={id}
          setId={setId}
          varMin={varMin}
          setVarMin={setVarMin}
          varMax={varMax}
          setVarMax={setVarMax}
          ordenacao={ordenacao}
          setOrdenacao={setOrdenacao}
        />
        <MainContainer>
          {pacotes

            // Filtro por ID

            .filter((item) => {
              return item.id.includes(id);
            })

            // Filtro por NOME

            .filter((item) => {
              return item.nome.toLowerCase().includes(name.toLowerCase());
            })

            // Resetando o filtro MAX e MIN.

            .filter((item) => {
              if (varMin !== "" && varMax !== 0) {
                if (item.preco >= varMin && item.preco <= varMax) {
                  return item.preco;
                }
              } else if (varMin === "" && varMax === "") {
                setVarMin(0);
                setVarMax(999);
              }
            })

            // Filtro Ordenação por NOME

            .sort((item, nItem) => {
              if (ordenacao === "Crescente") {
                return item.nome.localeCompare(nItem.nome);
              } else if (ordenacao === "Decrescente") {
                return nItem.nome.localeCompare(item.nome);
              } else if (ordenacao === "Ordenar") {
                return item.id.localeCompare(nItem.id);
              }
            })

            .map((item) => {
              return (
                <Cardpacote
                  item={item}
                  addCarrinho={addCarrinho}
                  key={item.id}
                  id={item.id}
                  imagem={item.imagem}
                  nome={item.nome}
                  preco={item.preco}
                  descricao={item.descricao}
                  compra={compra}
                  setCompra={setCompra}
                />
              );
            })}
        </MainContainer>
        <Footer />
      </div>
    );
  } else if (page === 2) {
    return (
      <div>
        <GlobalStyled />
        <NavCarrinho
          name={name}
          setName={setName}
          page={page}
          setPage={setPage}
          id={id}
          setId={setId}
        />
        <MainContainer>
          <Carrinho
            lista={lista}
            removeCarrinho={removeCarrinho}
            setLista={setLista}
            somarQuantidade={somarQuantidade}
            diminuirQuantidade={diminuirQuantidade}
          />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;