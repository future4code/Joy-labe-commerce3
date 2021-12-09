import React , { useState } from "react";
import styled from "styled-components"  

const Container = styled.div`
display:flex;
flex-direction: column;
border: solid 1px black;
margin: 10px;
padding: 10px;
`

const Titulo = styled.h2`
text-align: center;
margin-bottom: 1em;
`

const InputTag = styled.div`
margin: 10px 0;
`

export default function Filtros () {
    const [busca, setBusca] = useState ('');


    return (
    <Container>
        <Titulo> Filtros </Titulo>
            <InputTag>
                <label>Valor Mínimo </label><br />
                <input type="number" />
            </InputTag>
            <InputTag>
                <label>Valor Maximo </label><br />
                <input type="number" />
            </InputTag>
            <InputTag>
                <label>Busca por Nome </label><br />
                <input type="text" 
                value = {busca}
                onChange = {(event) => setBusca(event.target.value)}/>
            </InputTag>
    </Container>)

}
