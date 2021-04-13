exports.compare = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

exports.compareString = (a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0);

exports.fetchData = (apiUrl) => {
  // 'http://dummy.restapiexample.com/api/v1/employees'
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

exports.myHelper = (a, b) => {
  const numberA = parseFloat(a);
  const numberB = parseFloat(b);

  if (isNaN(numberA) || isNaN(numberB)) return null;

  return numberA + numberB;
};
