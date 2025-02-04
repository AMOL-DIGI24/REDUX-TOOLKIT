//! Import the Store from the store.js file
const store = require('./app/store')

//! Import the FetchUser Thunk
const fetchUsers = require('./Features/user/userSlice').fetchUsers;

console.log('Initial State ', store.getState());

const unubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
})



store.dispatch(fetchUsers());

