import React from 'react';

export default class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: ''
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(e) {
    this.setState({
      currentTab: this.state.currentTab === e ? '' : e
    });
  }

  render() {
    const currentTab = this.state.currentTab;
    const tabs = [];
    for (const i in this.props.topics) {
      tabs.push(<Tab tab={i} down={currentTab === i} onToggle={this.toggleTab} content={this.props.topics[i]}/>);
    }
    return (
      <div>
        {tabs}
      </div>

    );
  }
}

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab() {
    this.props.onToggle(this.props.tab);
  }

  render() {
    const info =
      this.props.down
        ? <div className="body">
          {this.props.content.body}
        </div>
        : '';
    return (
      <div className="tab">
        <div className="head" onClick={this.toggleTab}>
          {this.props.content.body}
        </div>
        {info}
      </div>
    );
  }
}
