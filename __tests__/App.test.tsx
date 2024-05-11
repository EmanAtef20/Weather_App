/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {create} from 'react-test-renderer';
import {CityRow} from '../src/components/CityRow';


it('render header', () => {
  renderer.create(<CityRow  item={{name: "London"}} onCityNameClick={ () => {}} onCityHistoryClick= {() => {}}/>);
})

it('renders correctly', () => {
  renderer.create(<App />);
});
