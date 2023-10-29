import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchDataReducer = createAsyncThunk('apiData', async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
})

export const updateDataReducer = createAsyncThunk('updateData', async data => {
  const response = await axios.put(
    `https://fakestoreapi.com/products/${data.id}`,
    data,
  )
  return response.data
})

const fetchDataSlice = createSlice({
  name: 'fetchData',
  initialState: {
    data: [],
    status: 'loading',
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchDataReducer.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchDataReducer.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      .addCase(fetchDataReducer.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

const updateDataSlice = createSlice({
  name: 'updateData',
  initialState: {
    data: [],
    status: 'loading',
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(updateDataReducer.pending, state => {
        state.status = 'loading'
      })
      .addCase(updateDataReducer.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      .addCase(updateDataReducer.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const {updateData} = updateDataSlice.actions

export default fetchDataSlice.reducer
