const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getMonthNameByNumber = (num: number): string => {
  if (num < 1 || num > 12) {
    throw new Error('Błędny numer miesiąca!');
  }

  return monthNames[num - 1];
};

export default getMonthNameByNumber;