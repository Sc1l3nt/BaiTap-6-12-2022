import { configureStore } from '@reduxjs/toolkit'
import { burgerState } from './Reducer/burgerState'

export const store = configureStore({
    reducer: {
        salad: (state = burgerState.salad, action) => {
            switch (action.type) {
                case 'SALAD_CHANGE_VALUE':{
                    state.menu = action.payload
                    return {...state}
                }
                default: return state
            }
        },
        cheese: (state = burgerState.cheese, action) => {
            switch (action.type) {
                case 'CHEESE_CHANGE_VALUE':{
                    state.menu = action.payload
                    return {...state}
                }
                default: return state
            }
        },
        beef: (state = burgerState.beef, action) => {
            switch (action.type) {
                case 'BEEF_CHANGE_VALUE':{
                    state.menu = action.payload
                    return {...state}
                }
                default: return state
            }
        }
    }
})