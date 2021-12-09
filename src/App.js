import React from 'react';
import styled from "styled-components"  
import './App.css';
import Filtros from './components/Filtros'
import CardProdutos from './components/CardProdutos'
import Carrinho from './components/Carrinho'
import ContainerCards from './components/ContainerCards'

const Body = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: 1fr 3fr 1fr;
justify-content: space-around;
`

class App extends React.Component {
  render(){
    return (
      <Body>
        <Filtros />
        <ContainerCards>
        
        </ContainerCards>
        <Carrinho />
      </Body>
  );
  }
}

export default App;



