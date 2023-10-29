import {View, Text, StyleSheet, FlatList} from 'react-native'
import React, {useContext, useEffect} from 'react'
import CartCard from '../components/CartCard'
import {UserContext} from '../context/UserContext'

const CartScreen = () => {
  const {cart, incrementItem, decrementItem, removeItem, getCartData} =
    useContext(UserContext)

  // console.log(cart)
  useEffect(() => {
    // getCartData()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Shopping Cart</Text>

      {cart.length === 0 ? (
        <Text style={{textAlign: 'center', fontSize: 25}}>
          Your cart is empty
        </Text>
      ) : (
        <FlatList
          data={cart}
          // keyExtractor={item => item.productId}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <CartCard
              product={item}
              onIncrement={incrementItem}
              onDecrement={decrementItem}
              onRemove={removeItem}
            />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
})

export default CartScreen
