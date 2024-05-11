import {request} from '@/utils';
const API_key = 'f5cb0b965ea1564c50c6f1b74534d823'
export async function getCityDetailsService(city: string): Promise<any> {
  return request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`, {
    method: 'get',
  });
}