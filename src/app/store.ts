import { configureStore } from '@reduxjs/toolkit'
//import homeReducer from './module/homePage/slice';
import homeReducer from '@/app/module/homeModule/slice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch