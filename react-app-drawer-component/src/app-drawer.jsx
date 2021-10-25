import React from 'react';

export default class AppDrawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { active: false };

    this.handleHamburger = this.handleHamburger.bind(this);
  }

  handleHamburger() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const hidden = this.state.active ? '' : 'hidden';
    const side = this.state.active ? '' : 'gone';
    return (
        <div className="app-drawer">
          <div onClick={this.handleHamburger} className={`modal ${hidden}`}>
          </div>
        <div className={`panel ${side}`}>
          <h1>Test</h1>
          <a onClick={this.handleHamburger}>Link A</a>
          <a onClick={this.handleHamburger}>Link B</a>
          <a onClick={this.handleHamburger}>Link C</a>
          </div>
          <i onClick={this.handleHamburger} className={'fas fa-hamburger'}></i>
        </div>
    );

  }

}
