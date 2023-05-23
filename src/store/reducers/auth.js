import createExtraReducer from "../../utils/extraReducer";
import createReducerSlice from "../../utils/redux-toolkit";
import { METHOD } from "../../utils/restApi";

const getUserInfo = createExtraReducer('USER_GET_INFO', '/login', METHOD.POST);
const userInfo = createReducerSlice('userInfo',getUserInfo);
export default userInfo.reducer;