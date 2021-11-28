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
                    <CardProdutos />
                    <CardProdutos />
                    <CardProdutos />
                    <CardProdutos />
                    <CardProdutos />
                    <CardProdutos />
                    <CardProdutos />
                    <CardProdutos />
                </ListaProdutos>
                
            </Container>)
        }
}

export default ContainerCards;