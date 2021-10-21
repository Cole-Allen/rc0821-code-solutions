import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('State: ', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="email" value={this.state.value} onChange={this.handleChange}>

          </input>
        </label>
        <button type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.getElementById('root')
);
