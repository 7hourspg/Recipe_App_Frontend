import {View, Text, Button, FlatList} from 'react-native'
import React from 'react'
import Card from '../components/Card'
import SearchFilterComponent from '../components/Header'
import {UserContext} from '../context/UserContext'

const HomeScreen = ({navigation}) => {
  const {data} = React.useContext(UserContext)

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <SearchFilterComponent />
      <FlatList
        data={data}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            category={item.category}
            navigation={navigation}
            id={item._id}
            item={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen
