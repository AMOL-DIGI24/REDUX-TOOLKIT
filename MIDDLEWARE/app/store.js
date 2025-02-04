//! Import the configureStore function from the redux-toolkit
const configureStore = require('@reduxjs/toolkit').configureStore;

//! Import The Redux Logger middleware
const logger = require('redux-logger').createLogger();


//! Import the combined reducer from your slices
const cakeReducer = require('../Features/cake/cakeSlice')
const icecreamReducer = require('../Features/icecream/icecreamSlice')

//! Create the Redux store with your combined reducer
const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : icecreamReducer
    },
    middleware : (getDefaultMidleware) => getDefaultMidleware().concat(logger),
    
})

//! Export the Redux store so it can be used in other parts of your application.
module.exports = store;

