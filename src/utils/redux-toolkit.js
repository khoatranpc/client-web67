import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isQuery: false,
    response: null,
    success: false,
};

const createReducerSlice = (name, asyncThunk, customReducer) => {
    return createSlice({
        name: name,
        initialState: initialState,
        reducers: {
            ...customReducer ? customReducer : {}
        },
        extraReducers(builder) {
            if (asyncThunk) {
                builder.addCase(asyncThunk.pending, (state, _) => {
                    state.isQuery = true;
                });
                builder.addCase(asyncThunk.fulfilled, (state, response) => {
                    state.isQuery = false;
                    state.response = response
                });
                builder.addCase(asyncThunk.rejected, (state, response) => {
                    state.isQuery = false;
                    state.response = response;
                    state.success = false;
                });
            }
        }
    });
};
export default createReducerSlice;