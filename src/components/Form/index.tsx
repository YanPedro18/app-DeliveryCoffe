
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'
import {
  FormContainer,
  FormGroup,
  InputCity,
  InputCountry,
  InputCounty,
  InputState, 
  InputStreet,
  InputUF,
  InputZip,
  MethodPayment,
  PaymentGroup } from './style'

function Form() {
  return (
    <FormContainer>
      <h4>Complete seu pedido</h4>
      <FormGroup>
        <h1><strong><MapPinLine size={22} /></strong>Endereço de Entrega</h1>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <InputStreet type="cep" placeholder="CEP" />
        <InputCity type="rua" placeholder="Rua" />
        <InputState type="numero" placeholder="Número" />
        <InputZip type="complemento" placeholder="Complemento" />
        <InputCounty type="bairro" placeholder="Bairro" />
        <InputCountry type="Cidade" placeholder="Cidade" />
        <InputUF type="uf" placeholder="UF" />
      </FormGroup>

      <PaymentGroup>
        <h1><strong><CurrencyDollar size={22} /></strong>Pagamento</h1>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <MethodPayment>
          <p><strong><CreditCard size={20} /></strong>CARTÃO DE CRÉDITO</p>
          <p><strong><Bank size={20} /></strong>CARTÃO DE DÉBITO</p>
          <p><strong><Money size={20} /></strong>DINHEIRO</p>
        </MethodPayment>
      </PaymentGroup>
    </FormContainer>
  )
}

export default Form