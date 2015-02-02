var React = require('react');

var Service = require('./service.jsx');
var ContentForm = require('./content-form.jsx');

var App = React.createClass({
  getInitialState: function getInitialState() {
    return {
      service: ''
    };
  },

  handleServiceChange: function handleServiceChange(e) {
    // TODO: switch to simple input to avoid form parsing
    this.setState({service: e.target.elements[0].value});
  },

  render: function render() {
    var style = {
      container: {
        background: 'white',
        borderRadius: 5,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        color: '#2C3E50',
        fontSize: 16,
        width: 680
      }
    };

    var contentForm;
    if (this.state.service) {
      contentForm = <ContentForm />;
    }

    return (
      <div style={style.container}>
        <Service service={this.state.service} onChange={this.handleServiceChange} />
        {contentForm}
      </div>
    );
  }
});

module.exports = App;
