import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isClicked ? 'Clicked' : 'Not clicked'}
      </button>
    );

  }

}

ReactDOM.render(
  <CustomButton/>,
  document.getElementById('root')
);
