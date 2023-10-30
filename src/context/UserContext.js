import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [data, setData] = useState([])

  const IP_ADDRESS = '192.168.1.5:3000'

  const handleAddToCart = item => {
    axios
      .put(`http://${IP_ADDRESS}/api/user/cart/653cccdae1ba2281b47d01dc`, item)
      .then(() => getCartData())
      .catch(error => console.log(error))
  }

  const handleRemoveFromCart = id => {
    axios
      .delete(`http://${IP_ADDRESS}/api/user/cart/653cccdae1ba2281b47d01dc`, {
        data: {productId: id},
      })
      .then(() => getCartData())
      .catch(error => console.log(error))
  }

  const handleIncrement = productId => {
    axios
      .put(
        `http://${IP_ADDRESS}/api/user/cart/653cccdae1ba2281b47d01dc/increment`,
        {productId: productId},
      )
      .then(() => getCartData())
      .catch(error => console.log(error))
  }

  const handleDecrement = productId => {
    axios
      .put(
        `http://${IP_ADDRESS}/api/user/cart/653cccdae1ba2281b47d01dc/decrement`,
        {productId: productId},
      )
      .then(() => getCartData())
      .catch(error => console.log(error))
  }

  const getCartData = () => {
    axios
      .get(`http://${IP_ADDRESS}/api/user/cart/653cccdae1ba2281b47d01dc`)
      .then(response => setCart(response.data))
      .catch(error => console.log(error))
  }

  const getData = () => {
    axios
      .get(`http://${IP_ADDRESS}/api/recipes`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }

  const handleSearch = text => {
    if (text?.length === 0) {
      getData()
      return
    }
    const filtered = data.filter(item =>
      item.title?.toLowerCase().includes(text?.toLowerCase()),
    )
    setData(filtered)
  }

  const handleFilter = filter => {
    if (filter === 'price-low-to-high') {
      axios
        .get(`http://${IP_ADDRESS}/api/recipes/filter-by-price-low-to-high`)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    } else if (filter === 'price-high-to-low') {
      axios
        .get(`http://${IP_ADDRESS}/api/recipes/filter-by-price-high-to-low`)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    } else if (filter === 'veg-only') {
      axios
        .post(`http://${IP_ADDRESS}/api/recipes/filter-by-category`, {
          category: 'Veg',
        })
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    } else if (filter === 'non-veg-only') {
      axios
        .post(`http://${IP_ADDRESS}/api/recipes/filter-by-category`, {
          category: 'Non Veg',
        })
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }
  }

  useEffect(() => {
    getCartData()
  }, [])

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
        getCartData,
        handleSearch,
        handleFilter,
      }}>
      {children}
    </UserContext.Provider>
  )
}
