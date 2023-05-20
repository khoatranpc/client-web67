import createExtraReducer from "../../utils/extraReducer";
import createReducerSlice from "../../utils/redux-toolkit";
import { METHOD } from "../../utils/restApi";

export const requestGetAllTodoList = createExtraReducer('GET_TODO_LIST', '/todos', METHOD.GET);
const testTodoList = createReducerSlice('todoListTest', requestGetAllTodoList);

export default testTodoList.reducer;