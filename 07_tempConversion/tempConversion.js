const convertToCelsius = function (tempF) {
  let tempCelcius = ((tempF - 32) * (5 / 9) * 10);
  return Math.round(tempCelcius, 1) / 10;
};

const convertToFahrenheit = function (tempC) {
  let tempFahrenheit = ((tempC * (9 / 5) + 32) * 10);
  return Math.round(tempFahrenheit, 1) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};