// import { createSlice } from '@reduxjs/toolkit';
// import { handlerFulfilled, handlerPending } from './operation';
// import { handlerRejected } from './../Contacts/operation';

// const rootSlice = createSlicereateSlice({
//     name: 'root',
//     initialState: {
//         isLoading: false, 
//         error: '',
//     },
//     extraReducers: (builder) => {
//         builder
//             .addMatcher((action) => action.type.endsWith('/pending'), handlerPending)
//             .addMatcher((action) => action.type.endsWith('/fulfilled'), handlerFulfilled)
//             .addMatcher((action) => action.type.endsWith('/rejected'), handlerRejected)      
//     }
// })