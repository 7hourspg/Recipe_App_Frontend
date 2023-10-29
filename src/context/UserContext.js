import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {Alert} from 'react-native'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [data, setData] = useState([])

  const handleAddToCart = item => {
    // console.log(item)
    // setCart([...cart, item])

    axios
      .put(
        'http://192.168.1.6:3000/api/user/cart/653cccdae1ba2281b47d01dc',
        item,
      )
      .then(response => getCartData())
      .catch(error => Alert.alert('Error', error))
  }

  const handleRemoveFromCart = id => {
    console.log('HANDLE REMOVE', id)
    axios
      .delete(
        'http://192.168.1.6:3000/api/user/cart/653cccdae1ba2281b47d01dc',
        {data: {productId: id}},
      )
      .then(response => getCartData())
      .catch(error => console.log(error))
  }

  const handleIncrement = productId => {
    console.log('HANDLE INCREMENT', productId)
    // const itemIndex = cart.findIndex(item => item.productId === productId)
    // console.log('ITEM INDEX', itemIndex)
    // console.log([cart[itemIndex].quantity+1])
    // setCart([cart[itemIndex].quantity+1])
    axios
      .put(
        'http://192.168.1.6:3000/api/user/cart/653cccdae1ba2281b47d01dc/increment',
        {productId: productId},
      )
      .then(response => getCartData())
      .catch(error => console.log(error))
  }

  const handleDecrement = productId => {
    console.log('HANDLE DECREMENT', productId)
    axios
      .put(
        'http://192.168.1.6:3000/api/user/cart/653cccdae1ba2281b47d01dc/decrement',
        {productId: productId},
      )
      .then(response => getCartData())
      .catch(error => console.log(error))
  }

  const getCartData = () => {
    // console.log("CALLING GET CART DATA")
    axios
      .get('http://192.168.1.6:3000/api/user/cart/653cccdae1ba2281b47d01dc')
      .then(response => setCart(response.data))
      .catch(error => console.log(error))
  }

  const getData = () => {
    axios
      .get('http://192.168.1.6:3000/api/recipes')
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getCartData()
  }, [])

  // console.log('cart', cart)

  return (
    <UserContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleIncrement,
        handleDecrement,
        data,
        getData,
        getCartData
      }}>
      {children}
    </UserContext.Provider>
  )
}
