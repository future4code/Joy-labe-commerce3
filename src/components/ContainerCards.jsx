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

        let listaProdutos =[
            {   id: 1,
                name: "Um Produto Bonito",
                value: 50,   
                imageUrl: "https://picsum.photos/200/200", 
            },
            {   id: 2,
                name: "Um Produto Legal",
                value: 150,   
                imageUrl: "https://picsum.photos/200/200", 
            },
            {   id: 3,
                name: "Um Produto Maneiro", 
                value: 500,     
                imageUrl: "https://picsum.photos/200/200", 
            },
            {   id: 4,
                name: "Um Produto Interessante", 
                value: 250,     
                imageUrl: "https://picsum.photos/200/200", 
            },
            {   id: 5,
                name: "Um Produto Barato", 
                value: 20,    
                imageUrl: "https://picsum.photos/200/200", 
            },
            {   id: 6,
                name: "Um Produto Radical", 
                value: 360,   
                imageUrl: "https://picsum.photos/200/200", 
            },
            {   id: 7,
                name:"Um Produto Diferenciado", 
                value: 643,  
                imageUrl: "https://picsum.photos/200/200", 
            },
            {   id: 8,
                name:"Um Produto Barro",
                value: 310,   
                imageUrl: "https://picsum.photos/200/200", 
            }

        ];
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
                    <CardProdutos  
                    const produtoUm 
                    />
                    <CardProdutos/>
                    <CardProdutos/>
                    <CardProdutos/>
                    <CardProdutos/>
                    <CardProdutos/>
                    <CardProdutos/>
                    <CardProdutos/>
                </ListaProdutos>

                
            </Container>)
        }
}

export default ContainerCards;