//! Import the configureStore function from the redux-toolkit
const configureStore = require('@reduxjs/toolkit').configureStore

//! Import the combined reducer from your slices
const cakeReducer = require('../Features/cake/cakeSlice')
const icecreamReducer = require('../Features/icecream/icecreamSlice')
//! Create the Redux store with your combined reducer
const store = configureStore({
    // Specify the combined reducer and middleware
    reducer : {
        cake : cakeReducer,
        icecream : icecreamReducer
    }
})

module.exports = store