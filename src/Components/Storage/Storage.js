import { configureStore } from '@reduxjs/toolkit'
import chartClickedReducer from './Chartclicked_data'
import userDataReducer from './Userdata'
//import Reducers from "./Calculator_data";
export const Store = configureStore({
  reducer: {
    chartClicked: chartClickedReducer,
    userData: userDataReducer
  },
})