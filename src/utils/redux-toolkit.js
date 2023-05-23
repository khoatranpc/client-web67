import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        isQuery: false,
        response: null,
        success: false,
    }
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
                    state.data = {
                        ...state.data,
                        isQuery: true
                    }
                });
                builder.addCase(asyncThunk.fulfilled, (state, response) => {
                    state.data = {
                        ...state.data,
                        isQuery: false,
                        response: response.payload.data
                    }
                });
                builder.addCase(asyncThunk.rejected, (state, response) => {
                    state.data = {
                        ...state.data,
                        isQuery: false,
                        response: response.payload.data,
                        success: false
                    }
                });
            }
        }
    });
};
export default createReducerSlice;