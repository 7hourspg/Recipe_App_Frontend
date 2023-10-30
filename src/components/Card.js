import React, {useContext} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {UserContext} from '../context/UserContext'

const Card = ({title, price, image, id, item}) => {
  const {handleAddToCart, cart, handleRemoveFromCart} = useContext(UserContext)

  const itemIndex = cart.findIndex(item => item.productId === id)

  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.cardDetails}>
        <View style={styles.titlePriceContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>Price: ${price}</Text>
        </View>
        {cart[itemIndex] ? (
          <View style={styles.cartActions}>
            <TouchableOpacity onPress={() => handleRemoveFromCart(id)}>
              <Text style={styles.cartButton}>Remove from Cart</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => handleAddToCart(item)}>
            <Text style={styles.cartButton}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardDetails: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePriceContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  cartActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cartQuantity: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartButton: {
    fontSize: 18,
    color: 'blue',
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
})

export default Card
