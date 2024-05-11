import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';


import {addHistoricalData, citiesDataType} from './citiesHistorical';

export const useStore = create(
  immer< citiesDataType>(
    (...a) => ({
      ...addHistoricalData(...a)
    }),
  ),
);
