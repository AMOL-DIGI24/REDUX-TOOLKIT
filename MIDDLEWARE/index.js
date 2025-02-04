//! Import The Store in the Main App Component
const store = require('./app/store');
const { cakeActions } = require('./Features/cake/cakeSlice');
const { icecreamActions } = require('./Features/icecream/icecreamSlice');

//! Checks The Initial State
console.log('Initial state ',store.getState());

//todo : The Logger Middleware takes care of logging every action dispatched to the store
//! Subscribes to the Store
// const unsubscribe = store.subscribe(() =>{
//     console.log('Updated State ', store.getState());
// })

//! Dispatches Cake Actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(10));

//! Dispatch The Icecream Actions
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(10));

//! Unsubscribes the Store
//todo : The Loggere Middleware takes care of logging every action dispatched to the store
// unsubscribe();

