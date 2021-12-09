import React from "react";
import styled from "styled-components"  

const TituloProduto = styled.h4`
    color: blue;
`
const PreçoProduto = styled.h4`
    color: red;
`

const CardProdutos = (props) => {
    
    return (
        <div>
            <img src="https://picsum.photos/id/237/200/300" /> 
                <div>
                    <p><TituloProduto>{props.tituloProduto}</TituloProduto></p>
                    <p><PreçoProduto>{props.preçoProduto}</PreçoProduto></p>
                    <button> Adicionar ao carrinho </button>
                </div>
        </div>)
    
}

export default CardProdutos;
