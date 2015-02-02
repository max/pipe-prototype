var React = require('react');

var ContentForm = React.createClass({
  render: function render() {
    var style = {
      alignItems: 'center',
      borderTop: '3px double #FFDADB',
      display: 'flex',
      justifyContent: 'center',
      minHeight: 200,
      padding: 16
    };

    return (
      <div style={style}>The form</div>
    );
  }
});

module.exports = ContentForm;
