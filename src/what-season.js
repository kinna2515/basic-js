const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
 
  let message = "Unable to determine the time of year!";
  let messageInv = 'Invalid date!';
  if (date == undefined) {
    return message;
  } else if ((date instanceof Date) === false) {
    throw new Error(messageInv);
  }
    let month = date.getMonth();
    let season = "";
    if (month == 11 && month < 2) {
      season = "winter";
    } else if (month < 5 && month > 1) {
      season = "spring";
    } else if (month < 8 && month > 4) {
      season = "summer";
    } else if (month < 11 && month > 7) {
      season = "autumn";
    } else {
      season = "winter";
    }
  return season;
}

module.exports = {
  getSeason,
};
