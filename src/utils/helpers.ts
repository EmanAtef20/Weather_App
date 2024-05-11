import moment from 'moment';

export const formateDate = (timestamp: number) => {
  const formattedDate = moment.unix(timestamp).locale('en').format('DD-MM-YYYY  HH:mm')
  
  return formattedDate;
};

