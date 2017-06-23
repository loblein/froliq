import React from 'react';

class ExpanderSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow(target) {
    if (target === this.props.visibleComponent && this.props.expanderVisible === true) {
      this.props.showExpander(false);
    } else {
      this.props.showExpander(true);
    }
  };

  handleClick(event) {
    const target = event.currentTarget.name;
    this.toggleShow(target);
    this.props.setComponent(target);
  };

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='switch-container'>
            <div className='switch-item'>
              <img src={window.girlAtCliff} name='travel' onClick={this.handleClick}/>
              <h4>Travel</h4>
            </div>
            <div className='switch-item'>
              <img src={window.fishingBoat} name='work' onClick={this.handleClick}/>
              <h4>Work</h4>
            </div>
            <div className='switch-item'>
              <img src={window.peopleOnBeach} name='play' onClick={this.handleClick}/>
              <h4>Play</h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default ExpanderSwitch;
