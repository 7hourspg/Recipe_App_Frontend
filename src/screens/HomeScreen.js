import {View, Text, Button, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../components/Card'
import SearchFilterComponent from '../components/Header'
import {UserContext} from '../context/UserContext'

const HomeScreen = ({navigation}) => {
  const [userData, setUserData] = useState({})
  const {data, getData} = React.useContext(UserContext)

  const getUserData = async () => {
    axios
      .get('http://192.168.1.6:3000/api/users/653cccdae1ba2281b47d01dc')
      .then(response => setUserData(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    // axios
    //   .get('http://192.168.1.6:3000/api/recipes')
    //   .then(response => setData(response.data))
    //   .catch(error => console.log(error))

    // getUserData()

    getData()
  }, [])

  // console.log(userData.cart)

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 10,
      }}>
      {/* <Button 
        title='Decrement'
        onPress={() => dispatch({type: 'counter/decrement'})}
        />
      <Text>{count}</Text>
      <Button
        title='Increment'
        onPress={() => dispatch({type: 'counter/increment'})}
      /> */}

      <SearchFilterComponent />
      <FlatList
        data={data}
        keyExtractor={item => item._id}
        renderItem={({item}) => ( 
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            navigation={navigation}
            id={item._id}
            userData={userData}
            item={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen
