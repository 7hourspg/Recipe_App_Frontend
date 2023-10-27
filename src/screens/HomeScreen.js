import {View, Text, Button, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../components/Card'
import SearchFilterComponent from '../components/Header'

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://192.168.1.7:3000/api/recipes')
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, [])

  console.log(data)

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 10,
      }}>
      <SearchFilterComponent />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            navigation={navigation}
            id={item.id}
          />
        )}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen
