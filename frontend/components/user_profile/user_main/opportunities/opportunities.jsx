import React from 'react';
import { values } from 'lodash';

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

    this.renderJobDetails(event);
  };

  renderJobDetails(event) {

  }

  renderJobList() {
    const jobs = values(this.props.jobs);
    const jobList = jobs.map((job, idx) => (
      <li className='job-item clearfix' key={idx} onClick={this.toggleExpand}>
        <div className='img-container'>
        </div>
        <h4>
          {job.title}
        </h4>
        <h5>
          ${job.rate}.00
        </h5>
        <p>
          {job.description}
        </p>

      </li>
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
