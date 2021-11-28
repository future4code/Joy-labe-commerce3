import React from "react";
import styled from "styled-components"  

class CardProdutos extends React.Component {
    render() {
        return (
            <div>
                <img src="https://picsum.photos/id/237/200/300" /> 
                <div>
                    <p> Produto X </p>
                    <p> R$200,00 </p>
                    <button> Adicionar ao carrinho </button>
                </div>
            </div>)
        }
}

export default CardProdutos;
