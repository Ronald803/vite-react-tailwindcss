import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import { useState } from 'react'
//import './App.css'

function App() {
  return (
    <div className='bg-red-100'>
      Hola Tarolas!!!!!
      <Home></Home>
      <MyAccount></MyAccount>
      <MyOrder></MyOrder>
      <MyOrders></MyOrders>
      <NotFound></NotFound>
      <Signin></Signin>
    </div>
  )
}

export default App
