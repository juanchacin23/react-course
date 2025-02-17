import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { Routes, Route } from 'react-router'

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage/>}> </Route>
        <Route path="checkout" element={ < CheckoutPage /> } /> 
        <Route path="orders" element={ < OrdersPage /> } /> 
      </Routes>
  )
}

export default App
