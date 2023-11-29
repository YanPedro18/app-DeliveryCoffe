import styled from "styled-components";
import background from "../../assets/Background.svg"


export const IntroContainer = styled.section`
margin-top: 3rem;
width: 90%;
height: 65vh;
display: flex;
align-items: center;
justify-content: space-around;

@media screen and (max-width: 438px) {
    flex-direction: column;
    flex-direction: column-reverse;
    margin-top: 12rem;
    & img {
        width: 11.75rem;
        height: 11.75rem;
        margin: 1rem auto;
    }
 
  }

&::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

& img {
    width: 24.75rem;
}
`
export const IntroContentFlex = styled.div`
text-align: left;

& h1 {
    width: 86%;
    font-size: 2.16rem;
    color: #272221;
    margin-bottom: 1rem;
}

& h6 {
    color: #403937;
    font-weight: 100;
    font-size: 0.9rem;
    width: 83%;
    margin-bottom: 2rem;
}

@media screen and (max-width: 438px) {
    & h1 {
    width: 99%;
    font-size: 2rem;

}
}
`

export const IntroTextContent = styled.div`
color: black;
display: flex;
width: 32rem;  
@media screen and (max-width: 438px) {
    width: 26rem;
}
height: 100px;
flex-wrap: wrap;



& p {
    width: 12.588rem;
    display: flex;
    align-items: center;
    font-size: 0.7rem;
}


& p > strong > svg {
    color: white;
    background-color: #8047F8;
    padding: 0.2rem;
    border-radius: 100%;
    margin-right: 0.3rem; 
}

`