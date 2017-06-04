import React from 'react';
import { values } from 'lodash';

class Opportunities extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    const jobs = _.values(this.props.jobs);
    const jobList = jobs.map((job, idx) => (
      <li className='job-item' key={idx}>
        <h4>
          {job.title}
        </h4>
        <p>
          Description: {job.description}
        </p>
        <p>
          Rate: {job.rate}
        </p>
      </li>
    ));

    return(
      <div className='opportunities-container'>
        <div className='opportunities'>
          <ul>
            {jobList}
          </ul>
        </div>
      </div>
    );
  };
};

export default Opportunities;
