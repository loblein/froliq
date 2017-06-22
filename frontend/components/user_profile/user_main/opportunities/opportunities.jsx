import React from 'react';
import { values } from 'lodash';
import OpportunityItem from './opportunity_item';

class Opportunities extends React.Component {
  constructor(props) {
    super(props);

    this.renderJobList = this.renderJobList.bind(this);
    this.renderJobsHeader = this.renderJobsHeader.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
  };

  clearExpanded(array) {
    for (var i = 0; i < array.length; i++) {
      array[i].className = 'job-item clearfix';
    };
  };

  toggleExpand(event) {
    const listItems = event.currentTarget.parentElement.children;

    if (event.currentTarget.className === 'job-item clearfix') {
      this.clearExpanded(listItems);
      event.currentTarget.className += ' expand';
    } else {
      this.clearExpanded(listItems);
    }

  };


  renderJobList() {
    const jobs = values(this.props.jobs);
    const jobList = jobs.map((job, idx) => (
      <OpportunityItem className='job-item clearfix' key={idx} onClick={this.toggleExpand} job={job}>
      </OpportunityItem>
    ));
    return jobList;
  };

  renderJobsHeader() {
    return (this.renderJobList().length === 0) ?
      <div>
        <h3>No results found</h3>
        <p className='no-results'>Try searching a new location?</p>
      </div>
      :
      this.props.filter.location &&
        <h3>Opportunities found in {this.props.filter.location}!</h3>
      ;
  };

  render() {
    return(
      <div className='opportunities-container'>
        <div className='opportunities'>
          { this.renderJobsHeader() }
          <ul>
            { this.renderJobList() }
          </ul>
        </div>
      </div>
    );
  };
};

export default Opportunities;
