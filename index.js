function dates(d) {
  var addDays = require("date-fns/addDays");
  const result = addDays(new Date(2020, 7, 20), d);
  return result.getDate();
}

module.exports = dates;
