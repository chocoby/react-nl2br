'use strict';

var React = require('react');
var newlineRegex = /(\r\n|\n\r|\r|\n)/g;

module.exports = function(str) {
  if (typeof str === 'number') {
    return str;
  } else if (typeof str !== 'string') {
    return '';
  }

  return str.split(newlineRegex).map(function(line) {
    if (line.match(newlineRegex)) {
      return React.createElement('br');
    } else {
      return line;
    }
  });
};
