//! Import the createSlice function from the @reduxjs/toolkit package.
const createSlice = require('@reduxjs/toolkit').createSlice

//! Import the CreateAsyncThunk function from the @reduxjs/toolkit package.
const createAsynchThunk = require('@reduxjs/toolkit').createAsyncThunk

//! Import the axios library for making HTTP requests.
const axios = require('axios')

//! Define the initial state for the cake slice.
const initialState = {
    loading : false,
    users : [],
    error : ''
}

//! It will automatically dispatch Lifecycle actions based on it return promise.
// A promise either pending, fulfilled, or rejected.
const fetchUsers = createAsynchThunk('user/fetchUsers', () =>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id))
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers : builder => {
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) =>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })

        builder.addCase(fetchUsers.rejected, (state, action) =>{
            loading = false,
            state.users = [ ],
            state.error = action.error.message
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers