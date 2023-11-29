import { useContext } from 'react'
import { 
  CardCoffe,
  CardContainer,
  CardContent,
  CategoryCardCoffe,
  CounterProductsCoffe,
  ItemsCardCoffe
      } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { coffeContext } from '../../context';


interface TypeItemsCoffeCart {
  id: number;
  imageProduct: string;
  productName: string;
  price: string;
  quantity: number;
}
function Card() {
  const { db, createItemCoffee, addDb, removeDb } = useContext(coffeContext)

  //função que leva as informações do item clicado, para a função CreateItemCoffe que vai criar o item no carinnho no home.
  function handleCreateItemCoffeCart(data: TypeItemsCoffeCart) {
    createItemCoffee(data)
  }

  function handleRemoveItemCart(data: TypeItemsCoffeCart) {
    removeDb(data)
  }

  function handleAddItemCart(data: TypeItemsCoffeCart) {
    addDb(data)
  }
  return (
    <CardContent>
      <h1>Nossos Cafés</h1>
      <CardContainer>
        {db.map((item, index) => {
          return <CardCoffe key={index}>
            <img src={item.imageProduct} alt="" />
            <CategoryCardCoffe>
              <span>{item.category![0]}</span>
              {item.category![1] && <span>{item.category![1]}</span>}
              {item.category![2] && <span>{item.category![2]}</span>}
            </CategoryCardCoffe>
            <h3>{item.productName}</h3>
            <p>{item.content}</p>
            <ItemsCardCoffe>
              <p><strong>R$</strong>{item.price}</p>

              <CounterProductsCoffe>
                <div onClick={() => handleRemoveItemCart(item)}>-</div>
                <span>{item.quantity}</span>
                <div onClick={() => handleAddItemCart(item)}>+</div>
              </CounterProductsCoffe>
              <button onClick={() => handleCreateItemCoffeCart(item)}><ShoppingCart size={28} /></button>
            </ItemsCardCoffe>
          </CardCoffe>
        })}
      </CardContainer>
    </CardContent>
  )
}

export default Card