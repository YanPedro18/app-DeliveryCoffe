import styled from "styled-components";


export const ProductsContainer = styled.aside`
width: 28rem;
height: 31.125rem;

& h4 {
   text-align: left;

}

@media screen and (max-width: 438px) {
   width: 24rem;
}

`
export const ProductsContent = styled.div`
background-color: #F3F2F2;
padding: 2.5rem;
margin: 30px auto;
border-top-right-radius: 2.75rem;
border-top-left-radius: 0.375rem;
border-bottom-right-radius: 0.375rem;
border-bottom-left-radius: 2.75rem;
`

export const CardProduct = styled.div`
display: flex;
justify-content: center;
align-items: center;
& img {
    width: 4rem;
   
}

& span {
      transform: translateY(-1.2rem);
      margin-left: 2.2rem;
}

@media screen and (max-width: 438px) {
   justify-content: space-between;
}

`

export const ProductGroup = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 0.6rem;
transform: translateX(-0.3rem);
width: 100%;
align-items: center;
justify-content: space-around;

& button {
   border-radius: 0.375rem;
   padding: 0.2rem;
   justify-content: center;
   width: 6rem;
   border: none;
   display: flex;
   align-items: center;
   color: #574F4D;
   background-color: #E6E5E5;
   font-size: 0.75rem;
}
& button > strong > svg {
   color: #8047F8;
}

& button:hover {
   cursor: pointer;
}
@media screen and (max-width: 438px) {
   width: 100%;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   
}
`

export const CounterProductsCoffe = styled.div`
 width: 15%;
 display: flex;
 justify-content: space-between;
 align-items: center;
margin: 0 1rem;
 & div{
    width: 20px;
    height: 22.5px;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background-color: #d9d9d9;
    display: flex;
    padding: 0.4rem;
    color: #8047F8;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    transform: translateX(0.1rem);
    cursor: pointer;
 }

 & div:nth-child(3n - 3) {
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    transform: translateX(-0.1rem);
 }

 & span {
   font-size: 17px;
   padding: 0.1rem 0.2rem;
    color: black;
    border-radius: 0;
    background-color: #d9d9d9;
    transform: translateY(-0rem);
    transform: translateX(-0.01rem);
    margin: 0;
 }

 @media screen and (max-width: 438px) {
      margin-bottom: 0.4rem;
      transform: translateX(-1.1rem);
    
}

`

export const Hr = styled.hr`
margin-top: 2rem;
margin-bottom: 2rem;
filter: opacity(60%);
border: 1px solid #E6E5E5;
`

export const TotalPriceCartCoffe = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 0.75rem;
align-self: stretch;

& div {
   color: #574F4D;
   font-size: 0.875rem;
   width: 100%;
   display: flex;
   justify-content: space-between;
}

 & a {
display: flex;
padding: 0.75rem 0.5rem;
justify-content: center;
text-decoration: none;
align-items: center;
gap: 0.25rem;
border-radius: 0.375rem;
background: #DBAC2C;
align-self: stretch;
border: none;
color: #FFF;
/* Components/Button G */
font-family: Roboto;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: 160%; /* 1.4rem */
text-transform: uppercase;

&:hover {
   cursor: pointer;
   background-color:#e5b533;
}
 }
`

export const PriceTotal = styled.div`
color: #403937;
& h6 {
   font-size: 1.05rem;
}


`



