import logo from '../../assets/intro.svg'
import { IntroContainer, IntroContentFlex, IntroTextContent } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
function Intro() {
  return (
    <IntroContainer>
        
        <IntroContentFlex>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h6>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h6>

            <IntroTextContent>
                <p><strong><ShoppingCart size={24} /></strong>Compra simples e segura</p>
                <p><strong><Package size={24} /></strong>Embalagem mantém o café intacto</p>
                <p><strong><Timer size={24} /></strong>Entrega rápida e rastreada</p>
                <p><strong><Coffee size={24} /></strong>O café chega fresquinho até você</p>
            </IntroTextContent>
        </IntroContentFlex>
        
        <img src={logo} alt="" />
    </IntroContainer>
  )
}

export default Intro