//1f = c * 9/5 + 32
// 1  = (f-32) * 5/9
//Math.roun(num * 10) / 10
const ftoc = function(f) {
  return Math.round(((f - 32) *(5/9)) * 10)/10
};

const ctof = function(c) {
  return Math.round((c * (9/5) + 32)*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
