module.exports.multiply = function(x,y) { return x * y; }
module.exports.add = function(x,y) { return x + y; }

module.exports.multiplyAsync = function(x,y,callback) {
  setTimeout(function() {
    callback(x * y);
  }, 1000);
}