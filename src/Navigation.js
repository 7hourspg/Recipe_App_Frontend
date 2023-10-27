import {View, Text} from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ContactScreen from './screens/ContactScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Navigation () {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#FCF5ED',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#0C356A',
          borderTopColor: 'transparent',
          height: 60,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginHorizontal: 10,
        },
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
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name='Contact'
        component={ContactScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='person' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default Navigation