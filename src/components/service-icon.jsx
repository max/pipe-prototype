var React = require('react');
var merge = require('merge');

var ServiceIcon = React.createClass({
  render: function render() {
    var icon = this.props.icon || 'default';
    var iconUrl = '/images/icons/' + icon + '.png';

    return (
      <img src={iconUrl} height="24" width="24" style={this.props.style} />
    );
  }
});

module.exports = ServiceIcon;
