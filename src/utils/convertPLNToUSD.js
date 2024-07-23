export const convertPLNToUSD = (PLN) => {

  if (PLN === undefined) {
    return NaN
  }
  if (typeof PLN !== 'number' && typeof PLN !== 'string') {
    return 'Error';
  }
  if (typeof PLN !== 'number' || isNaN(PLN)) {
    return NaN
  }
  if (PLN < 0) {
    return '$0.00';
  }

  const PLNtoUSD = PLN / 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');

}