//! 1. Import the  createSLice function from the redux-toolkit
const createSlice = require ('@reduxjs/toolkit').createSlice

//! 2. Define the initial state
const initialState = {
    numOfIcecreams : 10
}

//! 3. Define the Slice
const icecreamSlice = createSlice({
    //todo : The name of the slice. Used to generate action type strings, and should be a string that is unique within the entire Redux store.
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state) =>{
            state.numOfIcecreams--
        },
        restocked : (state,action) =>{
            state.numOfIcecreams += action.payload
        }
    }
})


//! 4. Export the Reducers
module.exports = icecreamSlice.reducer

//! 5. Export the action creators
module.exports.icecreamActions = icecreamSlice.actions;