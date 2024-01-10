import { CHART_LIST_FILTERED } from "./ChartTypes";
import HttpErrorResponseModel from "../../../models/HttpErrorResponseModel";
import data from './data'

const initialState = {
  selectedCategory: "All",
  chartData: data.barChartData,
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
        selectedCategory: action.payload.category, 
        chartData: action.payload.data,
      };
    }

    default:
      return state;
  }
};

export default ChartReducer;
