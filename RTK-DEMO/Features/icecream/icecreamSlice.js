//! 1.Import the createSlice function from the redux-toolkit
const createSlice = require('@reduxjs/toolkit').createSlice

//! 2.Define the Initial State
const initialState = {
    numOfIcecream : 20
}

//! 3.Define the Slice

const icecreamSlice = createSlice({
    //todo : The name of the slice. Used to generate action type strings, and should be a string that is unique within the entire Redux store.
    name : 'iecream',
    //todo : The initial state to be returned by the slice reducer.
    initialState,
    //todo : An object of "case reducers". Key names will be used to generate actions
    reducers : {
        ordered : (state) =>{
            state.numOfIcecream--;
        },
        restocked : (state,action) =>{
            state.numOfIcecream += action.payload
        }
    }
})

//! 4. Export the Action Creators
module.exports = icecreamSlice.reducer

//! 5. Exports the Reducers
module.exports.icecreamActions = icecreamSlice.actions