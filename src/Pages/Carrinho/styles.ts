import styled from "styled-components";


export const CarrinhoContainer = styled.section `
display: flex;
justify-content: center;
width: 100%;
gap: 1rem;
margin: 4rem auto;

@media screen and (max-width: 438px ) {
  flex-direction: column-reverse;
  display: flex;
    justify-content: center;
    width: 90%;
    align-items: center;
    gap: 16rem;
    margin: 6rem auto;
}
`
