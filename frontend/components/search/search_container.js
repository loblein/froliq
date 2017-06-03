import Search from './search';
import { connect } from 'react-redux';
import { fetchJobs } from '../../actions/job_actions';

const mapStateToProps = (state) => {

  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    search: filters => dispatch(fetchJobs(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
