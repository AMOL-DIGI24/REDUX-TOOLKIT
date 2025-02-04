//! Import the Store from the store.js file
const store = require('./app/store')
//! Import the action creators from the cakeSlice.js file.
//todo: To dispatch the actions we need to import the action creators from the cakeSlice.js file. 
const {cakeActions} = require('./Features/cake/cakeSlice');
const { icecreamActions } = require('./Features/icecream/icecreamSlice');

console.log('initial state ',store.getState());

const unsubscribe = store.subscribe(() =>{
    // The callback function will be called every time the store state changes.
    console.log('Updated State ', store.getState())
})

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(10));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(10));

//! Here we unsubscribe the store for listening to changes.
unsubscribe();