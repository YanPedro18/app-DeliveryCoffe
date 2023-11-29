import React, { useContext } from 'react'
import { Trash } from '@phosphor-icons/react'
import {
  CardProduct,
  CounterProductsCoffe,
  Hr,
  PriceTotal,
  ProductGroup,
  ProductsContainer,
  ProductsContent,
  TotalPriceCartCoffe
} from './styles'
import { coffeContext } from '../../context'
import { Link } from 'react-router-dom';

interface TypeItemsCoffeCart {
  id: number;
  imageProduct: string;
  productName: string;
  price: string;
  quantity: number;
}

function CardProducts() {

  const { listItemsCoffe, addItemCartCoffe, removeItemCartCoffe, deleteItemCoffee} = useContext(coffeContext)

  function handleAddItemCartCounter(coffe: TypeItemsCoffeCart) {
    addItemCartCoffe(coffe)
  }
  function handleremoveItemCartCounter(coffe: TypeItemsCoffeCart) {
    removeItemCartCoffe(coffe)
  }
  function handleDeleteItemCartCoffe(coffe: TypeItemsCoffeCart) {
    deleteItemCoffee(coffe)
  }

  //reduce o primeiro parametro acumula o valor pra vc, ent se usar + ea continha, ele guarda tudo.

  const TotalPrice = listItemsCoffe.reduce((acumulator, current) => acumulator + current.quantity * parseFloat(current.price), 0)
  const TotalOrderPrice = TotalPrice + 3.50;


  return (
    <ProductsContainer>
      <h4>Cafés selecionados</h4>
      {listItemsCoffe && listItemsCoffe.length ?

        <ProductsContent>

          {listItemsCoffe.map(items => {
            return (
              <React.Fragment key={items.id}>
                <CardProduct>
                  <img src={items.imageProduct} alt="" />

                  <div>
                    <p>{items.productName}</p>
                    <ProductGroup>

                      <CounterProductsCoffe>
                        <div onClick={() => handleremoveItemCartCounter(items)}>-</div>
                        <span>{items.quantity}</span>
                        <div onClick={() => handleAddItemCartCounter(items)}>+</div>
                      </CounterProductsCoffe>

                      <button onClick={() => handleDeleteItemCartCoffe(items)}><strong><Trash size={20} /></strong >REMOVER</button>

                    </ProductGroup>
                  </div>
                  {/* //para somar o valor de 'n' items pegamos a quantidade de items e multiplicamos pelo preço */}
                  <span>{(items.quantity * parseFloat(items.price)).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>

                </CardProduct>
                <Hr />
              </React.Fragment>
            )
          })}

          <TotalPriceCartCoffe>
            <div>
              <p>Total de itens</p>
              <span>{TotalPrice.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <PriceTotal>
              <h6>Total</h6>
              <span>{TotalOrderPrice.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </PriceTotal>
          <Link to='/Final'>Confirmar Pedido</Link>
          </TotalPriceCartCoffe>
        </ProductsContent>

        :
        <span></span>
      }
    </ProductsContainer>
  )
}

export default CardProducts