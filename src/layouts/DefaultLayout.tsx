import Header from "../components/Header"
import {Outlet} from 'react-router-dom'

function DefaultLayout() {
  return (
  <div>
    <Header />
    <Outlet />
  </div>
  )
}

export default DefaultLayout