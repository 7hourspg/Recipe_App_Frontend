import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native'

const Card = ({
  title,
  price,
  image,
  navigation,
  id,
  addToCart,
  removeFromCart,
}) => {
  const handleAddToCart = () => {
    addToCart(id)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(id)
  }

  const cartQuantity = 0

  return (
    <View
      style={styles.cardContainer}
      onPress={() => {
        // Handle navigation logic here using the 'navigation' prop and 'id'
      }}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.cardDetails}>
        <View style={styles.titlePriceContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>Price: ${price}</Text>
        </View>
        {cartQuantity > 0 ? (
          <View style={styles.cartActions}>
            <TouchableOpacity onPress={handleRemoveFromCart}>
              <Text style={styles.cartButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.cartQuantity}>{cartQuantity}</Text>
            <TouchableOpacity onPress={handleAddToCart}>
              <Text style={styles.cartButton}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleAddToCart}>
            <Text style={styles.addToCartButton}>Add to Cart</Text>
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
  cartButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  cartQuantity: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addToCartButton: {
    fontSize: 18,
    color: 'blue',
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
})

export default Card
