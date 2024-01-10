import data from './data';

export default class ChartEffect {
  static async chartFilteredList(payload) {
    console.log(payload);
    if (payload === 'All') {
      return data.barChartData;
    }
    return data.barChartData.filter((item) => item.category === payload);
  }
  
}
