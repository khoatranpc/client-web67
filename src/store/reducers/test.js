import { createAction } from '@reduxjs/toolkit';
import createExtraReducer from "../../utils/extraReducer";
import createReducerSlice from "../../utils/redux-toolkit";
import { METHOD } from "../../utils/restApi";

export const requestGetAllTodoList = createExtraReducer('GET_TODO_LIST', '/todos', METHOD.GET);
const testTodoList = createReducerSlice('todoListTest', requestGetAllTodoList, {
    // key: function => void
    deleteAllTodoList(state, payload) {
        console.log(payload);
        state.data.response = null;
    }
});
export const deleteAllTodoList = createAction(`${testTodoList.name}/deleteAllTodoList`);
export default testTodoList.reducer;