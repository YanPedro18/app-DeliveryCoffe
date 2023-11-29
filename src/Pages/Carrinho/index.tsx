import CardProducts from "../../components/CardProducts"
import Form from "../../components/Form"
import { CarrinhoContainer } from "./styles"



function Carrinho() {
  return (
    <CarrinhoContainer>
      <Form />
      <CardProducts />
    </CarrinhoContainer>
  )
}

export default Carrinho