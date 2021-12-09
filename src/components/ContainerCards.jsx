import React from "react";
import styled from "styled-components"  
import CardProdutos from "./CardProdutos"

const Navegacao = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 20px;
padding: 10px;`


const ListaProdutos = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
grid-row-gap: 30px;
padding: 5px;
margin: 10px;
`

const Container = styled.div`
border: solid 1px black;
margin: 10px;
padding: 10px;
`


class ContainerCards extends React.Component {
    render() {
        return (
            <Container>
                <Navegacao>
                    <p>Quantidade de produtos: X</p>
                    <div>
                        <label>Ordenação:</label>
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </div>
                </Navegacao>
                <ListaProdutos>
                    <CardProdutos tituloProduto = {"Um Produto Bonito"} preçoProduto = {Number(50).toFixed(2)}/>
                    <CardProdutos tituloProduto = {"Um Produto Legal"} preçoProduto = {Number(150).toFixed(2)}/>
                    <CardProdutos tituloProduto = {"Um Produto Maneiro"} preçoProduto = {Number(500).toFixed(2)}/>
                    <CardProdutos tituloProduto = {"Um Produto Interessante"} preçoProduto = {Number(250).toFixed(2)}/>
                    <CardProdutos tituloProduto = {"Um Produto Barato"} preçoProduto = {Number(20).toFixed(2)}/>
                    <CardProdutos tituloProduto = {"Um Produto Radical"} preçoProduto = {Number(360).toFixed(2)}/>
                    <CardProdutos tituloProduto = {"Um Produto Diferenciado"} preçoProduto = {Number(643).toFixed(2)}/>
                    <CardProdutos tituloProduto = {"Um Produto Barro"} preçoProduto = {Number(310).toFixed(2)}/>
                </ListaProdutos>
                
            </Container>)
        }
}

export default ContainerCards;