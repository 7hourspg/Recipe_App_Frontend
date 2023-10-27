import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'

import Navigation from './src/Navigation'

import {NavigationContainer} from '@react-navigation/native'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen'
import Other from './src/screens/Other'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     // backgroundColor: '#000',
    //   }}>
      <NavigationContainer>
        {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Tab' component={Navigation} />
        <Stack.Screen name='Other' component={Other} />
      </Stack.Navigator> */}

        <Navigation />
      </NavigationContainer>
    // </SafeAreaView>
  )
}

export default App
