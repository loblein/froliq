import React from 'react';
import { values } from 'lodash';

class Opportunities extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    const jobs = _.values(this.props.jobs);
    const jobList = jobs.map((job, idx) => (
      <li className='job-item clearfix' key={idx}>
        <div className='img-container'>
          this should be image
        </div>
        <h4>
          {job.title}
        </h4>
        <h5>
          ${job.rate}.00
        </h5>
        <p>
          Description: {job.description}
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
