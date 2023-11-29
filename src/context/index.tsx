
import { ReactNode, createContext, useEffect, useState } from 'react'
import dbJson from "../db/db.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DataCoffe {
    id: number;
    imageProduct: string;
    category?: string | string[];
    productName: string;
    content?: undefined | string;
    price: string;
    quantity: number;
}

interface ContextType {
    db: DataCoffe[]
    createItemCoffee: (data: DataCoffe) => void
    listItemsCoffe: DataCoffe[]
    addItemCartCoffe: (coffe: DataCoffe) => void
    removeItemCartCoffe: (coffe: DataCoffe) => void
    totalItemsCoffe: number
    addDb: (items: DataCoffe) => void
    removeDb: (items: DataCoffe) => void
    deleteItemCoffee: (data: DataCoffe) => void
    finallyCoffe: (item: string) => void
}
interface PropsChildren {
    children: ReactNode
}
export const coffeContext = createContext({} as ContextType)

function ContextCoffe({ children }: PropsChildren) {

    const [db, setDb] = useState<DataCoffe[]>([]);
    const [listItemsCoffe, setListItemsCoffe] = useState<DataCoffe[]>([])
    const [totalItemsCoffe, setTotalItemsCoffe] = useState(0)

    useEffect(() => {
        setDb(dbJson)
        console.log(db)
    }, [])


    //criando item clicado pelo usuario, e adicionando ao state de carrinho ou listItemsCoffe
    function createItemCoffee(data: DataCoffe) {
        //caso o item seja duplicado
        const existItem = listItemsCoffe.find(state => state.id === data.id)

        if (existItem) {

            setListItemsCoffe(state =>

                state.map(item =>
                    item.id === data.id ?

                        ({ ...item, quantity: item.quantity + 1 })

                        : item
                ))

            setTotalItemsCoffe(state => state + 1)
            toast.success("Item Adicionado ao Carrinho !");
            //para verificar tambem se a rota card não tiver algum item duplicado, ele somente adiciona o a quantity
            setDb((state) =>
                state.map(coffeItem => coffeItem.id === data.id
                    ? ({ ...coffeItem, quantity: coffeItem.quantity + 1 })
                    : coffeItem
                ));
        } else {
            const NewItemCoffe = {
                id: data.id,
                imageProduct: data.imageProduct,
                productName: data.productName,
                price: data.price,
                quantity: 1
            }
            setListItemsCoffe(state => [...state, NewItemCoffe])
            setTotalItemsCoffe(state => state + 1)
            toast.success("Item Adicionado ao Carrinho !");
            //para a primeira rota de card, tambem ter o incremento no counter
            setDb((state) =>
                state.map(coffeItem => coffeItem.id === data.id
                    ? ({ ...coffeItem, quantity: coffeItem.quantity + 1 })
                    : coffeItem
                ));
        }
    }

    function addItemCartCoffe(coffe: DataCoffe) {

        setListItemsCoffe(state =>
            state.map(coffeItem => coffeItem.id === coffe.id ?
                ({ ...coffeItem, quantity: coffeItem.quantity + 1 })
                :
                coffeItem
            ))
        setDb((state) =>
            state.map((coffeItem) =>
                coffeItem.id === coffe.id
                    ? { ...coffeItem, quantity: coffeItem.quantity + 1 }
                    : coffeItem
            ));
        setTotalItemsCoffe(state => state + 1)
        toast.success("Item Adicionado ao Carrinho !");
    }

    function addDb(items: DataCoffe) {
        setDb((state) =>
            state.map(coffeItem => coffeItem.id === items.id
                ? ({ ...coffeItem, quantity: coffeItem.quantity + 1 })
                : coffeItem
            ));
        setTotalItemsCoffe(state => state + 1)
        toast.success("Item Adicionado ao Carrinho !");
        const existItem = listItemsCoffe.find(state => state.id === items.id)

        if (existItem) {

            setListItemsCoffe((state) =>
                state.map(item =>
                    item.id === items.id
                        ? ({ ...item, quantity: item.quantity + 1 })
                        : item
                ))

        } else {
            const NewItemCoffe = {
                id: items.id,
                imageProduct: items.imageProduct,
                productName: items.productName,
                price: items.price,
                quantity: 1
            }
            setListItemsCoffe(state => [...state, NewItemCoffe])

        }

    }

    function removeDb(items: DataCoffe) {
        if (items.quantity > 1) {

            setDb((state) =>
                state.map((coffeItem) =>
                    coffeItem.id === items.id
                        ? { ...coffeItem, quantity: coffeItem.quantity - 1 }
                        : coffeItem
                ));
            setListItemsCoffe(state =>
                state.map(coffeItem => coffeItem.id === items.id ?
                    ({ ...coffeItem, quantity: coffeItem.quantity - 1 })
                    :
                    coffeItem
                ));
            setTotalItemsCoffe(state => state - 1)
            toast.success("Item Removido do Carrinho !");
        }
    }

    function removeItemCartCoffe(coffe: DataCoffe) {

        if (coffe.quantity > 1) {
            setListItemsCoffe(state =>
                state.map(coffeItem => coffeItem.id === coffe.id ?
                    ({ ...coffeItem, quantity: coffeItem.quantity - 1 })
                    :
                    coffeItem
                ))
            setTotalItemsCoffe(state => state - 1)

            setDb((state) =>
                state.map((coffeItem) =>
                    coffeItem.id === coffe.id
                        ? { ...coffeItem, quantity: coffeItem.quantity - 1 }
                        : coffeItem
                ));
        }
        toast.success("Item Removido do Carrinho !");

    }

    function deleteItemCoffee(coffe: DataCoffe) {

        const newList = [...listItemsCoffe]

        const NewListCartCoffe = newList.filter(state => state.id !== coffe.id)

        setListItemsCoffe(NewListCartCoffe)

        if (coffe.quantity > 0) {
            setTotalItemsCoffe(state => state - coffe.quantity)
            toast.success("Item Removido do Carrinho !");
            console.log(listItemsCoffe)
            setDb((state) =>
                state.map((coffeItem) =>
                    coffeItem.id === coffe.id
                        ? { ...coffeItem, quantity: coffeItem.quantity = 0 }
                        : coffeItem
                ));
        }
    }

    function finallyCoffe(item: string) {

        if(item === "Finalizado") {
                    useEffect(() => {
            setDb(dbJson)
        }, [])

        // setDb(state =>
        //     state.filter(items => items.quantity = 0))
        // setListItemsCoffe([])
        setTotalItemsCoffe(0)
        }
    }
    return (
        <coffeContext.Provider value={{
            db,
            createItemCoffee,
            listItemsCoffe,
            addItemCartCoffe,
            removeItemCartCoffe,
            totalItemsCoffe,
            addDb,
            removeDb,
            deleteItemCoffee,
            finallyCoffe
        }}>
            {children}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
      
        </coffeContext.Provider>
    )
}

export default ContextCoffe