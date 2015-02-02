var React = require('react');

var ServiceCommand = React.createClass({
  handleChange: function handleChange(e) {
    // TODO: Obviously just mock data for the two examples
    if (e.target.value.toLowerCase().indexOf('trello') > -1) {
      this.props.onChange('trello');
    }

    if (e.target.value.toLowerCase().indexOf('github') > -1) {
      this.props.onChange('github');
    }
  },

  handleSubmit: function handleSubmit(e) {
    this.props.onSubmit(e);
  },

  render: function render() {
    var style = {
      form: {
        flex: 1
      },
      input: {
        display: 'block',
        outline: 'none',
        width: '100%'
      }
    };

    return (
      <form style={style.form} onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Pipe to service..." style={style.input} onChange={this.handleChange} autoFocus="true" />
      </form>
    );
  }
});

module.exports = ServiceCommand;
