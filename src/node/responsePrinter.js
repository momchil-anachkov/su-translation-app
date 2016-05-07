(function(module) {
  'use strict';

  var responsePrinter = {};

  responsePrinter.print = function (responseObj) {
    var toPrint = responseObj[Object.keys(responseObj)[0]];
    console.log();
    console.log(toPrint);
  };

  module.exports = exports = responsePrinter;
}(module));
