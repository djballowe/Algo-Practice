// adding binary Leet code 6/30

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const ans = (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  return ans;
};

console.log(addBinary('11', '1'));
