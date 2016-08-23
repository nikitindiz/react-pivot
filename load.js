var React = require('react');
var render = require('react-dom').render;
var ReactPivot = require('./index.jsx');

module.exports = function (el, opts) {
  render(
    React.createElement(ReactPivot, opts),
    el
  )
};
