import {
  useWeatherQuery,
} from '@/services';
import {useStore} from '@/store';
import _ from 'lodash';

export const addToHistory_Func = (city: string, data: {}, citiesHistoricalData: {}, setCitiesHistoricalData: Function) => {
  let setData = {}
  const history = citiesHistoricalData[city];

  if (!history) {
  setData[city] = [data]
  } else {
  setData[city] = [...history, data]
  }
  setCitiesHistoricalData(setData);

}

export const useCitiesHooks = () => {
const {citiesHistoricalData, setCitiesHistoricalData} = useStore(state => state.citiesData);
  const {
    getDetailsLoading,
    getDetailsDataQuery,
    updateName,
    result
  } = useWeatherQuery();
  const getcityDetailsFunc = async (city: string) => {
    updateName(city);
    getDetailsDataQuery();
  };
  const addToHistory = (city: string, data: {}) => {
    addToHistory_Func(city, data, citiesHistoricalData, setCitiesHistoricalData);
  }

  return {
    getDetailsLoading,
    getcityDetailsFunc,
    result,
    addToHistory,
    citiesHistoricalData
  };
};
