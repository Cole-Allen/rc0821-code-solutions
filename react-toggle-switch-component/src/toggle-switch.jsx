import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.status = 'OFF';
    this.state = { toggle: false };
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    this.status = this.state.toggle ? 'ON' : 'OFF';
    return (
        <div className='toggle'>
        <button id='toggle' onClick={this.toggleHandler} className={`${this.status} button-one`}>
            <button onClick={this.toggleHandler} className='button-two'></button>
          </button>
          <label htmlFor='toggle'>
            {this.status}
          </label>
        </div>

    );
  }
}
