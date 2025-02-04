//! 1. Import the createSlice function from the redux-toolkit
const createSlice = require('@reduxjs/toolkit').createSlice

//! 2. Define the initial state 
const initialState = {
    numOfCakes : 10
}
//! 3.Define the Slice 
//todo : A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const cakeSlice = createSlice({
    //todo : The name of the slice. Used to generate action type strings, and should be a string that is unique within the entire Redux store.
    name : 'cake',
    //todo : The initial state to be returned by the slice reducer.
    initialState,
    //todo : An object of "case reducers". Key names will be used to generate actions
    reducers : {
        ordered : (state) => {
            state.numOfCakes--
        },
        restocked : (state,action) =>{
            state.numOfCakes += action.payload
        }
    }
})

//! 4.Export the Reducers
module.exports = cakeSlice.reducer

//! 5.Export the action creators
module.exports.cakeActions = cakeSlice.actions