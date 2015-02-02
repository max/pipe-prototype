var React = require('react');
var ServiceIcon = require('./service-icon.jsx');
var ServiceCommand = require('./service-command.jsx');

var Service = React.createClass({
    getInitialState: function() {
      return { icon: this.props.service };
    },

    handleChange: function handleChange(icon) {
      this.setState({icon: icon});
    },

    handleSubmit: function handleSubmit(e) {
      e.preventDefault();
      this.props.onChange(e);
    },

    render: function render() {
      var style = {
        container: {
          alignItems: 'center',
          display: 'flex',
          padding: 16
        },
        icon: {
          marginRight: 8
        }
      };

      var serviceNode;
      if (this.props.service) {
        serviceNode = <div>New Trello Card</div>;
      }
      else {
        serviceNode = <ServiceCommand onChange={this.handleChange} onSubmit={this.handleSubmit} />;
      }

      return (
        <div style={style.container}>
          <ServiceIcon icon={this.state.icon} style={style.icon} />
          {serviceNode}
        </div>
      );
    }
});

module.exports = Service;
