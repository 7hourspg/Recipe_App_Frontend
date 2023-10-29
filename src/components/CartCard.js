import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {UserContext} from '../context/UserContext'

const CartCard = ({product}) => {
  // const [quantity, setQuantity] = useState(product.quantity)
  const {handleRemoveFromCart, handleIncrement, handleDecrement} =
    React.useContext(UserContext)

  return (
    <View style={styles.cartItem}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.itemInfo}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
        <Text style={styles.price}>Price: ${product.quantity * product.price}</Text>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => handleDecrement(product.productId)}>
          <Text style={styles.cartButton}>-</Text>
        </TouchableOpacity>
        <Text>{product.quantity}</Text>
        <TouchableOpacity onPress={() => handleIncrement(product.productId)}>
          <Text style={styles.cartButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Icon
            name='delete'
            size={28}
            color='red'
            onPress={() =>
              Alert.alert('Delete', 'Are you sure?', [
                {text: 'No', onPress: () => console.log('No Pressed')},
                {
                  text: 'Yes',
                  onPress: () => handleRemoveFromCart(product.productId),
                },
              ])
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 14,
  },
  itemActions: {
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
  quantity: {
    marginHorizontal: 10,
  },
  deleteButton: {
    marginLeft: 10,
  },
})

export default CartCard
