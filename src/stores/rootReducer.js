import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ToastsReducer from "./toasts/ToastsReducer";
import CommonReducer from "./common/CommonReducer";
import UserReducer from "./common/users/UserReducer";
import ChartReducer from "./common/charts/ChartReducer"

export default history => {
  const reducerMap = {
    router: connectRouter(history),
    toasts: new ToastsReducer().reducer,
    common: new CommonReducer().reducer,
    users: UserReducer,
    charts: ChartReducer
  };

  return combineReducers(reducerMap);
};
