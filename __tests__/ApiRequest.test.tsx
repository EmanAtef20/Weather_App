/**
 * @format
 */

import 'react-native';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {getCityDetailsService} from '../src/services/EndPoints/weather';


it('fetches city details will return new data different from old data', async () => {
  const city = 'London';
  const expectedData = { // Mock response data
    "coord": {
      "lon": -0.1257,
      "lat": 51.5085
  },
  "weather": [
      {
          "id": 721,
          "main": "Haze",
          "description": "haze",
          "icon": "50d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 289.23,
      "feels_like": 288.98,
      "temp_min": 286.49,
      "temp_max": 292.38,
      "pressure": 1021,
      "humidity": 80
  },
  "visibility": 4200,
  "wind": {
      "speed": 4.12,
      "deg": 70
  },
  "clouds": {
      "all": 100
  },
  "dt": 1715418590,
  "sys": {
      "type": 2,
      "id": 268730,
      "country": "GB",
      "sunrise": 1715400858,
      "sunset": 1715456371
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
  };

  // Mock the request function to return expected data
  jest.fn(getCityDetailsService).mockResolvedValueOnce(expectedData);

  const response = await getCityDetailsService(city);

  expect(response).not.toEqual(expectedData);
});
