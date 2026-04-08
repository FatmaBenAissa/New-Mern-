import { configureStore } from '@reduxjs/toolkit'
import productSlice  from './productslice'

export const store = configureStore({
  reducer: {
    product:productSlice
  },
})