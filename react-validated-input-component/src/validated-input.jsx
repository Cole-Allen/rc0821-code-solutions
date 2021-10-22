import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      class: '',
      error: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let error;
    let check = <i className="fas fa-check"></i>;
    if (this.state.value === '') {
      error = <span className="error">A password is required.</span>;
      check = <i className="fas fa-times"></i>;
    } else if (this.state.value.length < 8) {
      error = <span className="error">Password is too short.</span>;
      check = <i className="fas fa-times"></i>;
    }
    return (
      <div className ="validated-input">
        <label htmlFor="password">
          Password
        </label>
        <input className={this.state.class} type="password" onChange={this.handleChange} value={this.state.value} id="password"></input>
        {check}
        {error}
      </div>
    );

  }
}
