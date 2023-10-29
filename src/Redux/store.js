import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import fetchDataReducer from './services/fetchDataSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fetchDataReducer,
  },
})
