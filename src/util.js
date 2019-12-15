export function oxfordComma(things) {
  let clause

  switch (things.length) {
    case 0:
      clause = '';
      break;
    case 1:
    case 2:
      clause = things.join(' and ');
      break;
    case 3:
    default:
      clause = things.slice(0, -1).join(', ') +
        ', and ' +
        things[things.length-1]
  }

  return clause
}

export function decimalEquation(exponents, sum) {
  if (exponents.length === 1) return Math.pow(2, exponents[0])
  return exponents.sort().map(e => Math.pow(2, e)).join(' + ') + ' = ' + sum
}
