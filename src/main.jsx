var React = require('react');
var App = require('./components/app.jsx');

window.addEventListener('DOMContentLoaded', function() {
  var mountNode = document.querySelector('#app');
  React.render(<App />, mountNode);
});
