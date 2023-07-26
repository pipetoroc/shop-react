import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import MyAccount from '../Pages/MyAccount/MyAccount'
import MyOrder from '../Pages/MyOrder/MyOrder'
import MyOrders from '../Pages/MyOrders/MyOrders'
import NotFound from '../Pages/NotFound/NotFound'
import SignIn from '../Pages/SignIn/SignIn'
import Navbar from '../Components/Navbar/Navbar.jsx'

import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}

function App () {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
