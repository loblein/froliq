import { connect } from 'react-redux';
import LocalNav from './local_nav';
import { fetchJobs } from '../../../../actions/job_actions';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    populateOpportunities: (filters) => dispatch(fetchJobs(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalNav);
