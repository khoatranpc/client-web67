import { createAsyncThunk } from "@reduxjs/toolkit";
import doRequest from "./restApi";

const createExtraReducer = (typeAction, uri, method) => {
    return createAsyncThunk(typeAction, async (action) => {
        const rs = await doRequest(uri, method, action);
        console.log(rs);
        return rs;
    })
};
export default createExtraReducer;