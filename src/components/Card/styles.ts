import styled from "styled-components";

export const CardContent = styled.main`
    margin: 0 auto;
    width: 100%;
& h1 {
    margin-left: 3.3rem;
    text-align: left;
    color: #403937;
    font-size: 1.6rem;
}

@media screen and (max-width: 438px) {
    margin: 7rem auto;
}
`

export const CardContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding-top: 3rem;


`
export const CardCoffe = styled.div`
margin-top: 4rem;
@media screen and (max-width: 438px ) {
    margin-right: 0rem;
}
margin-right: 1rem;
display: flex;
align-items: center;
flex-direction: column;
width: 16rem;
color: black;
height: 19.375rem;
background-color: #F3F2F2;
border-top-right-radius: 2.2rem;
border-bottom-left-radius: 2.2rem;

& img {
    width: 7.5rem;
    transform: translateY(-1.4rem);
}

& span {
    font-weight: 600;
    background-color: #F1E9C9;
    color: #C47F17;
    border-radius: 1rem;
    transform: translateY(-0.8rem);
    font-size: 0.625rem;
    padding: 0.4rem;
    margin-bottom: 0.3rem;
    text-transform: uppercase;
}

& h3 {
    color: #403937;
}

& p {
    color: #8D8686;
    margin: 0 1.6rem;
    margin-top: 0.6rem;
    font-size: 0.8rem;
    font-weight: 100;

}
`

export const CategoryCardCoffe = styled.div`
display: flex;
gap: 0.3rem;
`
export const ItemsCardCoffe = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 2rem;

& p {
    color: #574F4D;
    font-size: 1.563rem;
    font-weight: 900;
    & strong {
        margin: 0 0.2rem;
        font-weight: 600;
        font-size: 1rem;
        color: #403937;
    }
}

& button {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: none;
    margin: 0 auto;
    padding: 0.2rem;
    background: #4B2995;

    & svg {
        color: white;
    }
} 

& button:hover{
    background: #6a46b7;
    cursor: pointer;
}
`
export const CounterProductsCoffe = styled.div`
 width: 15%;
 display: flex;
 justify-content: space-between;
 align-items: center;

 & div{
    width: 40px;
    height: 33.5px;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background-color: #d9d9d9;
    display: flex;
    padding: 0.4rem;
    color: #8047F8;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
 }

 & div:nth-child(3n - 3) {
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    transform: translateX(-0.2rem);
 }

 & span {
    font-size: 17.5px;
    color: black;
    border-radius: 0;
    font-weight: 900;
    background-color: #d9d9d9;
    transform: translateY(-0rem);
    margin: 0;
 }
`