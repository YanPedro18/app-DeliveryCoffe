import styled from "styled-components";


export const FormContainer = styled.section`

@media screen and (max-width: 438px) {
  width: 100%;
}
& h4 {
  text-align: left;
  
}
`

export const FormGroup = styled.div`
  margin: 30px auto;
  width: 31rem;
  height: 21.25rem;
  background-color: #F3F2F2;
  padding: 2.5rem;
  border-radius: 0.375rem;

  @media screen and (max-width: 438px) {
    width: 23rem;
    height: 27.25rem;
  }

  & h1 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #403937;
    margin: 0 auto;
    font-weight: 400;
  }
  & h1 > strong > svg {
    color: #C47F17;
    margin-right: 0.5rem;
  }
  & p {
    padding-left: 1.9rem;
    margin-bottom: 1.4rem;
    text-align: left;
    font-size: 0.9rem;
    color: #574F4D;
  }
`;

export const FormControl = styled.input`
  margin: 5px 5px;
  float: left;
  border: 1px solid #E6E5E5;
  border-radius: 0.25rem;
  padding: 0.7rem;
  background-color: #EDEDED;
 &::placeholder {
    background-color: #EDEDED;

 }
`;

export const InputStreet = styled(FormControl)`
  width: 20%;
`;

export const InputCity = styled(FormControl)`
  width: 97%;
`;

export const InputState = styled(FormControl)`
  width: 30%;
`;

export const InputZip = styled(FormControl)`
  width: 65%;
`;

export const InputCounty = styled(FormControl)`
  width: 30%;
`;

export const InputCountry = styled(FormControl)`
  width: 50%;
`;
export const InputUF = styled(FormControl)`
  width: 12%;
`;

export const PaymentGroup = styled.div`
background-color: #F3F2F2;
margin: 0.8rem;
width: 31rem;
border-radius: 0.375rem;
padding: 2.5rem;

@media screen and (max-width: 438px) {
    width: 24rem;
    margin: 0;
  }


& h1 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #403937;
    margin: 0 auto;
    font-weight: 400;
  }
  & h1 > strong > svg {
    color: #8047F8;
    margin-right: 0.5rem;
  }
  & p {
    padding-left: 1.8rem;
    margin-bottom: 1.4rem;
    text-align: left;
    font-size: 0.9rem;
    color: #574F4D;
  }

`

export const MethodPayment = styled.div`
display: flex;

& p {
  display: flex;
  background-color: #E6E5E5;
  font-size: 0.6rem;
  align-items: center;
  justify-content: center;
  margin: 0 0.55rem;
  width: 11.125rem;
  gap: 0.4rem;
  height: 3.188rem;
  padding: 12px;
  border: transparent 1px solid;
}
& p:hover {
   border: #8047F8 1px solid;
   cursor: pointer;
}
& p > strong > svg {
  color: #8047F8;
}

@media screen and (max-width: 438px) {
   gap: 1rem;
    & p {
    font-size: 0.5rem;
    margin: 0;
    gap: 0.01rem;
    }
  }
`