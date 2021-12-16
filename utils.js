// CC BY-SA 3.0 https://stackoverflow.com/a/8273091/3789500

function range(start, stop, step) {
  if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
  }

  if (typeof step == 'undefined') {
      step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
  }

  return result;
};

Array.prototype.sortNumerical = function() {
  this.sort(function (a, b) {
    return a - b;
  })
  return this
}

Array.prototype.sortNumericalReverse = function() {
  this.sort(function (a, b) {
    return b - a;
  })
  return this
}

Array.prototype.pick = function(n) {
  return this.slice(0, n)
}

module.exports = {
  range
}