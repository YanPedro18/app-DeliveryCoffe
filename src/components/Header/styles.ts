import styled from "styled-components";


export const HeaderContainer = styled.header`
z-index: 1 !important;
padding-top: 2rem;
margin: 0 auto;
width: 91%;
height: 3rem;
background-color: #FAFAFA;
& nav {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
   & ul {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    list-style: none;
   }
   & ul > li {
    margin: 0 auto;
    display: flex;
    align-items: center;
   }
   & ul > li > a{
    text-decoration: none;
    display: flex;
    align-items: center;

   }
}
`
export const MapLocation = styled.li`
& a{
    background-color: #EBE5F9;
    color: #4B2995;
    border-radius: 0.375rem;
    padding: 0.5rem;
}
`

export const CartItem = styled.li`
& a {
    margin: 0 auto;
    padding: 0.5rem;
    background-color: #F1E9C9;
    color: #C47F17;
    border-radius: 0.375rem;
}

& span {
    position: relative;
    top: -1.3rem;
    left: -0.7rem;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    padding: 0.2rem 0.4rem;
    border-radius: 1000px;
    color: white;
    background: #C47F17;
}

`
