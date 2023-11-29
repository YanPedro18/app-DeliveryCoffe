import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { CartItem, HeaderContainer, MapLocation } from './styles'
import Logo from '../../assets/Logo.svg'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { coffeContext } from '../../context'

function Header() {
const { totalItemsCoffe } = useContext(coffeContext)


  return (
    <HeaderContainer>
      <nav>
      <Link to="/"><picture><img src={Logo} alt="" /></picture></Link>
        <ul>
          <MapLocation><Link to='/'><MapPin size={32} />Belo Horizonte, BH</Link></MapLocation>
          <CartItem><Link to="/Carrinho"><ShoppingCart size={32} /></Link><span>{ totalItemsCoffe }</span></CartItem>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header