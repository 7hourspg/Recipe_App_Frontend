import {View, Text} from 'react-native'
import React, {useContext} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native'
import {UserContext} from './context/UserContext'

import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ContactScreen from './screens/ContactScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Navigation () {
  const navigation = useNavigation()
  const {cart} = useContext(UserContext)
  // console.log(cart)

  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#000',
        tabBarShowLabel: false,
        // headerShown: false,
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='cart' color={color} size={26} />
          ),
          tabBarBadge: cart.length > 0 ? cart.length : null,
          headerLeft: () => (
            <Ionicons
              name='arrow-back'
              size={26}
              color='#000'
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Contact'
        component={ContactScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='person' color={color} size={26} />
          ),
          headerLeft: () => (
            <Ionicons
              name='arrow-back'
              size={26}
              color='#000'
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default Navigation
