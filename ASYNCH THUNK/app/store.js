//! Import the configureStore function from the redux-toolkit
const configureStore = require('@reduxjs/toolkit').configureStore

//! Import the User Reducer from the userSlice
const userReducer = require('../Features/user/userSlice')


const store = configureStore({
    reducer : {
        user : userReducer
    }
})

module.exports = store