import ChartEffect from "./ChartEffect";
import { CHART_LIST_FILTERED } from "./ChartTypes";

export const setSelectedCategory = (category) => {
  return async (dispatch) => {
    try {
      const filteredData = await ChartEffect.chartFilteredList(category);
      dispatch({
        type: CHART_LIST_FILTERED,
        payload: { category, data: filteredData }, // Pass category along with data
      });
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };
};
