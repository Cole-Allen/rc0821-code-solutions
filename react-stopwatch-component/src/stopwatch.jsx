import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      play: false,
      icon: 'fas fa-play'
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.setState({ timer: this.state.timer + 1 });
  }

  reset() {
    if (!this.state.play) {
      this.setState({ timer: 0 });
    }

  }

  togglePlay() {
    if (this.state.play) {
      clearInterval(this.timerID);
      this.setState({
        play: false,
        icon: 'fas fa-play'
      });
    } else {
      this.setState({
        play: true,
        icon: 'fas fa-pause'
      });
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

  }

  render() {
    return (
      <div className="stopwatch">
        <div onClick={this.reset} className="outside-circle">
          <div className="timer">
            {this.state.timer}
          </div>
        </div>
        <div className="play-pause">
          <i onClick={this.togglePlay} className={this.state.icon}></i>
        </div>
      </div>
    );
  }
}
