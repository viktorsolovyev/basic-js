const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = new Map();

  domains.forEach((element) => {
    let subDomains = element.split(".");

    for (let i = subDomains.length - 1; i >= 0; i--) {
      let item = "." + subDomains[i];
      let part = "";
      for (let j = subDomains.length - 1; j > i; j--) {
        part += "." + subDomains[j];
      }
      item = part + item;

      if (!result.has(item)) {
        result.set(item, 1);
      } else {
        result.set(item, result.get(item) + 1);
      }
    }
  });

  return Object.fromEntries(result.entries());
}

module.exports = {
  getDNSStats
};
