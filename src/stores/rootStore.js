import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { routerMiddleware } from "connected-react-router";
import reduxFreeze from "redux-freeze";
import environment from "environment";
import rootReducer from "./rootReducer";
import errorToastMiddleware from "../middlewares/errorToastMiddleware";

const initialState = {
  lineChartData: [
    { date: new Date(2022, 0, 1), value: 450 },
    { date: new Date(2022, 1, 1), value: 560 },
    { date: new Date(2022, 2, 1), value: 600 },
    // Add more data as needed
  ],
  barChartData: [
    { category: 'Category 1', value: 200 },
    { category: 'Category 2', value: 350 },
    { category: 'Category 3', value: 500 },
    // Add more data as needed
  ],
};
export default (history) => {
  const middleware = [
    environment.isDevelopment ? reduxFreeze : null,
    thunk,
    routerMiddleware(history),
    errorToastMiddleware(),
  ].filter(Boolean);

  const store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
};
