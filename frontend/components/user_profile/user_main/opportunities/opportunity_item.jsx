import React from 'react';
import ItemDetails from './item_details';

class OpportunityItem extends React.Component {
  constructor(props) {
    super(props);

  };

  handleClick() {

  }

  render() {
    return (
      <div className={this.props.className} onClick={this.props.onClick}>
        <div className='headline'>
          <div className='img-container'>
          </div>
          <h4>
            {this.props.job.title}
          </h4>
          <h5>
            ${this.props.job.rate}.00
          </h5>
          <p>
            {this.props.job.description}
          </p>
        </div>
        <ItemDetails job={this.props.job}/>
        <div className='button-container'>
          <button className='apply' onClick={this.handleClick}>Apply</button>
        </div>
      </div>
    );
  }
};

export default OpportunityItem;
