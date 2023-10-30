import React from 'react'
import Navigation from './src/Navigation/Navigation'
import {NavigationContainer} from '@react-navigation/native'

import {UserProvider} from './src/context/UserContext'

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </NavigationContainer>
  )
}

export default App
