import {configureStore} from '@reduxjs/toolkit'
import characterReducer from "./character_Slice"
import mainPageReducer from './mainPage_Slice';

export const store = configureStore({
    reducer: {
        character: characterReducer,
        mainPage: mainPageReducer,
    },
})
