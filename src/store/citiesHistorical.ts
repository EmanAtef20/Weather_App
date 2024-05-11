/* eslint-disable no-param-reassign */
import {StateCreator} from 'zustand';

type citiesHistoricalDataType = {};

export type citiesDataType = {
  citiesData: {
    citiesHistoricalData: citiesHistoricalDataType;
    setCitiesHistoricalData: (data: citiesHistoricalDataType) => void;
    reset: () => void;
  };
};
const initialState = {};

export const addHistoricalData: StateCreator<citiesDataType> = set => ({
    citiesData: {
        citiesHistoricalData: {},
        setCitiesHistoricalData: (data: citiesHistoricalDataType) =>
        set(state => {
          state.citiesData.citiesHistoricalData = {
            ...state.citiesData.citiesHistoricalData,
            ...data,
          };
        }),
    reset: () =>
      set(state => {
        state.citiesData.citiesHistoricalData = initialState;
      }),
  },
});
