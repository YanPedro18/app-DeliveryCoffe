import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Carrinho from "./Pages/Carrinho"
import DefaultLayout from "./layouts/DefaultLayout"
import Finally from "./Pages/Finally"


function Router() {
  return (
    <Routes>
       <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Carrinho" element={<Carrinho/>}></Route>
        <Route path="/Finally" element={<Finally/>}></Route>
       </Route>
    </Routes>
  )
}

export default Router