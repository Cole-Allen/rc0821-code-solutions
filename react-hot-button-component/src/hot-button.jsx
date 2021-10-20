import React from 'react';

export default class HotButton extends React.Component {

  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      temp: 'ice'
    };

    this.pressHandler = this.pressHandler.bind(this);
  }

  pressHandler() {
    this.count++;
    if (this.count >= 18) {
      this.setState({ temp: 'nuclear' });
    } else if (this.count >= 15) {
      this.setState({ temp: 'hot' });
    } else if (this.count >= 12) {
      this.setState({ temp: 'warm' });
    } else if (this.count >= 9) {
      this.setState({ temp: 'room-temp' });
    } else if (this.count >= 6) {
      this.setState({ temp: 'cool' });
    } else if (this.count >= 3) {
      this.setState({ temp: 'cold' });
    }

  }

  render() {
    return (
      <button onClick={this.pressHandler} className={this.state.temp}>Hot Button</button>
    );
  }
}
