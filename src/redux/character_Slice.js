import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    characterObj: {

    }
}

export const character_Slice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setPlayerCharacter: (state, action) => {
            state.characterObj = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {increment, incrementByAmount, setPlayerCharacter} = character_Slice.actions

export default character_Slice.reducer