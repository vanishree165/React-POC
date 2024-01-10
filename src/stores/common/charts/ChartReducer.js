import { CHART_LIST_FILTERED } from "./ChartTypes";
import HttpErrorResponseModel from "../../../models/HttpErrorResponseModel";

const initialState = {
  selectedCategory: "All",
  chartData: [],
};

const ChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHART_LIST_FILTERED: {
      if (action.payload instanceof HttpErrorResponseModel) {
        return {
          ...state,
          error: action?.payload?.raw?.data?.error?.msg,
          token: "",
        };
      }
      return {
        ...state,
        selectedCategory: action.payload.category, // Update selectedCategory
        chartData: action.payload.data,
      };
    }

    default:
      return state;
  }
};

export default ChartReducer;
