import React from 'react';
import { values } from 'lodash';
import OpportunityItemContainer from './opportunity_item_container';

class Opportunities extends React.Component {
  constructor(props) {
    super(props);

    this.renderJobList = this.renderJobList.bind(this);
    this.renderJobsHeader = this.renderJobsHeader.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.clearFloatbox = this.clearFloatbox.bind(this);
    this.applyToJob = this.applyToJob.bind(this);
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
      <OpportunityItemContainer className='job-item clearfix' key={idx} onClick={this.toggleExpand} job={job}>
      </OpportunityItemContainer>
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

  applyToJob() {

  }

  clearFloatbox() {
    this.props.clearFloatbox()
  }

  renderFloatbox() {
    if (this.props.floatbox.display) {
      const { title, rate } = this.props.floatbox.data;

      return (
          <div className='floatbox'>
            <h3>Apply to job?</h3>
            <div className='body'>
              <div className='headers'>
                <h4>{title}</h4>
                <h5>${rate}.00</h5>
              </div>
              <p>Job will be added to your <i>pending</i> tab</p>
            </div>

            <div className='button-container'>
              <button onClick={this.applyToJob} className='blue'>Apply</button><button onClick={this.clearFloatbox} className='blue'>Cancel</button>
            </div>
          </div>
      );
    };
  };

  render() {
    return(
      <div className='opportunities-container'>
        { this.renderFloatbox() }
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
